import { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Box, Movable, Page, Path } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { drawPolylineInLCS } from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { Cursor } from "../graphics/const";
import { moveShapes, resolveAllConstraints } from "../macro";

/**
 * BoxMoveController
 */
export class BoxMoveController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.hasHandle = false;
    this.snap = new Snap();
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape.movable !== Movable.NONE &&
      !(shape as Box).anchored
    );
  }

  /**
   * Returns mouse cursor for the controller
   * @returns cursor [type, angle]
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] {
    return [Cursor.MOVE, 0];
  }

  initialize(editor: Editor, shape: Shape): void {
    editor.transform.startAction("move");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    let targetShape: Shape | null = shape;
    if (targetShape.movable === Movable.PARENT)
      targetShape = targetShape.findParent(
        (s) => (s as Shape).movable !== Movable.PARENT
      ) as Shape;
    if (!targetShape || targetShape instanceof Page) return;
    if (
      targetShape.movable === Movable.VERT ||
      targetShape.movable === Movable.NONE
    )
      this.dxStepGCS = 0;
    if (
      targetShape.movable === Movable.HORZ ||
      targetShape.movable === Movable.NONE
    )
      this.dyStepGCS = 0;

    // return if no change
    if (this.dxStepGCS === 0 && this.dyStepGCS === 0) return;

    // determine container (shouldn't be itself of a descendant of target)
    const canvas = editor.canvas;
    let p2 = targetShape.localCoordTransform(canvas, this.dragPoint, false);
    let container = editor.getCurrentPage()?.getShapeAt(canvas, p2, [shape]);
    const r = targetShape.find((s) => s.id === container?.id);
    if (r) container = null;
    if (!(container && container.canContain(targetShape)))
      container = editor.getCurrentPage();

    // update
    const page = editor.getCurrentPage()!;
    editor.transform.transact((tx) => {
      moveShapes(
        tx,
        page,
        [targetShape],
        this.dxStepGCS,
        this.dyStepGCS,
        container
      );
      resolveAllConstraints(tx, page, canvas);
    });
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Shape) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape): void {
    const canvas = editor.canvas;
    if (
      !(
        shape instanceof Path &&
        (shape.path.length === 2 || shape.pathEditable)
      )
    ) {
      drawPolylineInLCS(canvas, shape, shape.getEnclosure());
    }
  }

  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    // hovering containable
    const dp = shape.localCoordTransform(canvas, this.dragPoint, true);
    const container = editor.getCurrentPage()?.getShapeAt(canvas, dp, [shape]);
    if (container && container !== shape && container.canContain(shape)) {
      const manipulator = manipulatorManager.get(container.type);
      if (manipulator) manipulator.drawHovering(editor, container, e);
    }
  }
}
