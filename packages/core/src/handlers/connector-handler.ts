import { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Connector, Line, Shape } from "../shapes";
import { Editor, Handler, manipulatorManager } from "../editor";
import { Cursor, Mouse } from "../graphics/const";
import { findConnectionAnchor } from "../controllers/utils";
import * as guide from "../utils/guide";
import { lcs2ccs } from "../graphics/utils";
import { addShape, resolveAllConstraints, setPath } from "../macro";

/**
 * Connector Factory Handler
 */
export class ConnectorFactoryHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  tailEnd: Shape | null = null;
  tailAnchor: number[] = [0.5, 0.5];
  headEnd: Shape | null = null;
  headAnchor: number[] = [0.5, 0.5];
  shape: Connector | null = null;

  reset() {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.tailEnd = null;
    this.tailAnchor = [0.5, 0.5];
    this.headEnd = null;
    this.headAnchor = [0.5, 0.5];
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    if (page) {
      const [end, anchor] = findConnectionAnchor(
        editor,
        null,
        this.dragStartPoint
      );
      this.tailEnd = end;
      this.tailAnchor = anchor;
      this.shape = editor.factory.createConnector(
        this.tailEnd,
        this.tailAnchor,
        this.headEnd,
        this.headAnchor,
        [this.dragStartPoint, this.dragPoint]
      );
      this.shape.path = [this.dragStartPoint, this.dragPoint];
      editor.transform.startAction("create");
      editor.transform.transact((tx) => {
        addShape(tx, this.shape!, page);
      });
    }
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    if (page) {
      const [end, anchor] = findConnectionAnchor(
        editor,
        this.shape,
        this.dragPoint
      );
      this.headEnd = end;
      this.headAnchor = anchor;
      const newPath = geometry.pathCopy((this.shape as Connector).path);
      newPath[1] = this.dragPoint;
      editor.transform.transact((tx) => {
        setPath(tx, this.shape as Line, newPath);
        tx.assignRef(this.shape as Shape, "head", this.headEnd);
        tx.assign(this.shape as Shape, "headAnchor", this.headAnchor);
        resolveAllConstraints(tx, page, editor.canvas);
      });
    }
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    const MIN_SIZE = 2;
    if (this.shape) {
      if (geometry.pathLength((this.shape as Connector).path) < MIN_SIZE) {
        editor.transform.cancelAction();
      } else {
        editor.transform.endAction();
        editor.factory.triggerCreate(this.shape);
      }
    }
  }

  /**
   * pointerDown
   * @override
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1) {
      const canvas = editor.canvas;
      this.dragging = true;
      this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.dragPoint = geometry.copy(this.dragStartPoint);
      this.initialize(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    if (this.dragging) {
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.update(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    } else {
      editor.repaint();
      this.drawHovering(editor, e);
    }
  }

  /**
   * pointerUp
   * @override
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      this.finalize(editor, e);
      editor.repaint();
      this.reset();
      this.complete(editor);
    }
  }

  keyDown(editor: Editor, e: KeyboardEvent): boolean {
    if (e.key === "Escape" && this.dragging) {
      editor.transform.cancelAction();
      editor.repaint();
      this.reset();
      this.complete(editor);
    }
    return false;
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }

  drawTailHovering(editor: Editor, e: CanvasPointerEvent) {
    if (this.tailEnd && this.tailEnd.connectable) {
      const manipulator = manipulatorManager.get(this.tailEnd.type);
      if (manipulator) manipulator.drawHovering(editor, this.tailEnd, e);
    }
  }

  drawHeadHovering(editor: Editor, e: CanvasPointerEvent) {
    if (this.headEnd && this.headEnd.connectable) {
      const manipulator = manipulatorManager.get(this.headEnd.type);
      if (manipulator) manipulator.drawHovering(editor, this.headEnd, e);
    }
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {
    this.drawTailHovering(editor, e);
  }

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    this.drawTailHovering(editor, e);
    this.drawHeadHovering(editor, e);
    if (this.shape instanceof Connector) {
      const canvas = editor.canvas;
      const tailAnchorPoint = this.shape.getTailAnchorPoint();
      const headAnchorPoint = this.shape.getHeadAnchorPoint();
      const p1 = lcs2ccs(canvas, this.shape, tailAnchorPoint);
      const p2 = lcs2ccs(canvas, this.shape, headAnchorPoint);
      const pathCCS = this.shape.path.map((p) =>
        lcs2ccs(canvas, this.shape!, p)
      );
      guide.drawDottedLine(canvas, p1, pathCCS[0]);
      guide.drawDottedLine(canvas, p2, pathCCS[pathCCS.length - 1]);
      guide.drawControlPoint(canvas, p1, this.shape.tail ? 5 : 1);
      guide.drawControlPoint(canvas, p2, this.shape.head ? 5 : 1);
    }
  }
}
