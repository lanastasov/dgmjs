import { constraintManager, Box, Shape, Page } from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { z } from "zod";
import { measureText } from "../utils/text-utils";
import { Transaction } from "../core/transaction";
import { resizeShape } from "../macro";

const schema = z.object({
  width: z
    .enum(["ignore", "children", "text", "text-min", "parent", "value"])
    .default("ignore"),
  height: z
    .enum(["ignore", "children", "text", "text-min", "parent", "value"])
    .default("ignore"),
  widthValue: z.number().default(0),
  heightValue: z.number().default(0),
});

/**
 * Set size
 */
function constraint(
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
  args: z.infer<typeof schema>
) {
  if (shape instanceof Box) {
    let width = shape.width;
    let height = shape.height;

    // set size to number
    if (args.width === "value") width = args.widthValue;
    if (args.width === "value") height = args.heightValue;

    // set size to "children"
    if (args.width === "children" || args.height === "children") {
      const r = shape.getChildrenBoundingRect();
      width = geometry.width(r) + shape.padding[1] + shape.padding[3];
      height = geometry.height(r) + shape.padding[0] + shape.padding[2];
    }

    // set size to "text" or "text-min"
    if (
      shape instanceof Box &&
      (args.width === "text" ||
        args.width === "text-min" ||
        args.height === "text" ||
        args.height === "text-min")
    ) {
      const textSize = measureText(canvas, shape, shape.text);
      if (args.width === "text")
        width = Math.ceil(
          textSize.minWidth + shape.padding[1] + shape.padding[3]
        );
      if (args.width === "text-min")
        width = Math.max(
          shape.width,
          Math.ceil(textSize.width + shape.padding[1] + shape.padding[3])
        );
      if (args.height === "text")
        height = Math.ceil(
          textSize.height + shape.padding[0] + shape.padding[2]
        );
      if (args.height === "text-min")
        height = Math.max(
          shape.height,
          Math.ceil(textSize.height + shape.padding[0] + shape.padding[2])
        );
    }

    // set size to "parent"
    if (shape.parent instanceof Box) {
      if (args.width === "parent") width = shape.parent.innerWidth;
      if (args.height === "parent") height = shape.parent.innerHeight;
    }
    return resizeShape(tx, shape, width, height);
  }
  return false;
}

constraintManager.define("set-size", constraint, schema);
