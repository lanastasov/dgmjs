import { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { Mouse, Cursor } from "../graphics/const";
import { Highlighter } from "../shapes";
import { addShape, resolveAllConstraints, setPath } from "../macro";

/**
 * Highlighter Factory Handler
 */
export class HighlighterFactoryHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  draggingPoints: number[][] = [];
  closed: boolean = false;
  shape: Highlighter | null = null;

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.draggingPoints = [];
    this.closed = false;
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    if (page) {
      this.draggingPoints.push(this.dragStartPoint);
      this.shape = editor.factory.createHighlighter(this.draggingPoints);
      editor.transform.startAction("create");
      editor.transform.transact((tx) => {
        addShape(tx, this.shape!, page);
      });
    }
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    this.draggingPoints.push(this.dragPoint);
    const newPath = structuredClone(this.draggingPoints);
    editor.transform.transact((tx) => {
      if (page && this.shape) {
        setPath(tx, this.shape, newPath);
        resolveAllConstraints(tx, page, editor.canvas);
      }
    });
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    if (this.shape) {
      const MIN_SIZE = 2;
      if (geometry.pathLength(this.draggingPoints) < MIN_SIZE) {
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
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    if (this.dragging) {
      const canvas = editor.canvas;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.update(editor, e);
      editor.repaint();
    } else {
      editor.repaint();
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
}
