import { ControllerPosition } from "../graphics/const";
import { Manipulator, manipulatorManager } from "../editor";
import { BoxRotateController } from "../controllers/box-rotate";
import { BoxMoveController } from "../controllers/box-move";
import { BoxMoveAnchoredController } from "../controllers/box-move-anchored";
import { BoxMoveAnchorPositionController } from "../controllers/box-move-anchor-position";
import { BoxSizeController } from "../controllers/box-size";
import { BoxCreateConnectorController } from "../controllers/box-create-connector";

/**
 * TextManipulator
 */
class TextManipulator extends Manipulator {
  constructor() {
    super();
    // this.controllers.push(new BoxSizeController(this, {position: ControllerPosition.TOP}));
    // this.controllers.push(new BoxSizeController(this, {position: ControllerPosition.BOTTOM}));
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.LEFT })
    );
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.RIGHT })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.LEFT_TOP,
        doScale: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.RIGHT_TOP,
        doScale: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.RIGHT_BOTTOM,
        doScale: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.LEFT_BOTTOM,
        doScale: true,
      })
    );
    this.controllers.push(new BoxRotateController(this));
    this.controllers.push(new BoxMoveAnchoredController(this));
    this.controllers.push(new BoxMoveAnchorPositionController(this));
    this.controllers.push(new BoxMoveController(this));
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.TOP,
      })
    );
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.BOTTOM,
      })
    );
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.LEFT,
      })
    );
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.RIGHT,
      })
    );
  }
}
manipulatorManager.define("Text", new TextManipulator());

export { TextManipulator };
