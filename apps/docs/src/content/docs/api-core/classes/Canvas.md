---
editUrl: false
next: false
prev: false
title: "Canvas"
---

Canvas

## Constructors

### new Canvas()

> **new Canvas**(`element`, `pixelRatio`): [`Canvas`](/api-core/classes/canvas/)

#### Parameters

• **element**: `HTMLCanvasElement`

• **pixelRatio**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L199)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/graphics.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L194)

***

### colorVariables

> **colorVariables**: `Record`\<`string`, `string`\>

#### Source

[graphics/graphics.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L182)

***

### context

> **context**: `CanvasRenderingContext2D`

#### Source

[graphics/graphics.ts:181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L181)

***

### element

> **element**: `HTMLCanvasElement`

#### Source

[graphics/graphics.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L180)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/graphics.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L190)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/graphics.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L191)

***

### font

> **font**: `string`

#### Source

[graphics/graphics.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L193)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/graphics.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L192)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/graphics.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L183)

***

### origin

> **origin**: `number`[]

#### Source

[graphics/graphics.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L196)

***

### px

> **px**: `number`

#### Source

[graphics/graphics.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L185)

***

### ratio

> **ratio**: `number`

#### Source

[graphics/graphics.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L184)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/graphics.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L195)

***

### scale

> **scale**: `number`

#### Source

[graphics/graphics.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L197)

***

### stateStack

> **stateStack**: `CanvasState`[]

#### Source

[graphics/graphics.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L186)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/graphics.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L187)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/graphics.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L189)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/graphics.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L188)

## Methods

### arc()

> **arc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an arc with fill and stroke.
angles are started from 12'clock in degree.

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1243)

***

### curve()

> **curve**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a curved lines with fill and stroke

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1075](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1075)

***

### drawImage()

> **drawImage**(`image`, `x`, `y`, `width`, `height`): [`Canvas`](/api-core/classes/canvas/)

Draw Image

#### Parameters

• **image**: `CanvasImageSource`

• **x**: `number`

• **y**: `number`

• **width**: `number`

• **height**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1343)

***

### ellipse()

> **ellipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an ellipse with fill and stroke

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:783](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L783)

***

### fillArc()

> **fillArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled arc. angles are started from 12'clock in degree.

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1207)

***

### fillCurve()

> **fillCurve**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1035](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1035)

***

### fillEllipse()

> **fillEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a filled ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:735](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L735)

***

### fillPath()

> **fillPath**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1291)

***

### fillPolygon()

> **fillPolygon**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1124)

***

### fillRect()

> **fillRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a filled rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:496](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L496)

***

### fillRoundRect()

> **fillRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a filled and rounded rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:608](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L608)

***

### fillText()

> **fillText**(`x`, `y`, `text`): [`Canvas`](/api-core/classes/canvas/)

Fill a text

#### Parameters

• **x**: `number`

• **y**: `number`

text baseline (metric.ascent - not the top of text)

• **text**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1331)

***

### globalCoordTransform()

> **globalCoordTransform**(`point`): `number`[]

Transform global coord to canvas coord (GCS --> CCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L287)

***

### globalCoordTransformRev()

> **globalCoordTransformRev**(`point`): `number`[]

Transform canvas coord to global coord (CCS --> GCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:296](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L296)

***

### globalTransform()

> **globalTransform**(): [`Canvas`](/api-core/classes/canvas/)

Transform global context to canvas context (origin, scale)

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:275](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L275)

***

### line()

> **line**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a line

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:418](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L418)

***

### path()

> **path**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a path with fill and stroke

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1319](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1319)

***

### polygon()

> **polygon**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a polygon with fill and stroke

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1157)

***

### polyline()

> **polyline**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw polyline

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:798](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L798)

***

### rect()

> **rect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rect with fill and stroke

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:530](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L530)

***

### resolveColor()

> **resolveColor**(`color`): `string`

Resolve color variable to hex color string

#### Parameters

• **color**: `string`

#### Returns

`string`

#### Source

[graphics/graphics.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L228)

***

### restore()

> **restore**(): [`Canvas`](/api-core/classes/canvas/)

Restore context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L313)

***

### restoreState()

> **restoreState**(): [`Canvas`](/api-core/classes/canvas/)

Restore the canvas states from a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L256)

***

### rotate()

> **rotate**(`angle`): `void`

Rotation transform

#### Parameters

• **angle**: `number`

anti-clockwise in degree

#### Returns

`void`

#### Source

[graphics/graphics.ts:329](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L329)

***

### roundRect()

> **roundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rounded rect with fill and stroke

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:667](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L667)

***

### roundRectLine()

> **roundRectLine**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw rounded rect line

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:836](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L836)

***

### save()

> **save**(): [`Canvas`](/api-core/classes/canvas/)

Save context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L305)

***

### setAlpha()

> **setAlpha**(`alpha`): [`Canvas`](/api-core/classes/canvas/)

Set alpha

#### Parameters

• **alpha**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:392](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L392)

***

### setFillColor()

> **setFillColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set fill color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:360](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L360)

***

### setFillStyle()

> **setFillStyle**(`style`): [`Canvas`](/api-core/classes/canvas/)

Set fill style

#### Parameters

• **style**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:368](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L368)

***

### setFont()

> **setFont**(`font`): [`Canvas`](/api-core/classes/canvas/)

Set font

#### Parameters

• **font**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:384](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L384)

***

### setFontColor()

> **setFontColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set font color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L376)

***

### setRoughness()

> **setRoughness**(`roughness`): [`Canvas`](/api-core/classes/canvas/)

Set roughness

#### Parameters

• **roughness**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:400](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L400)

***

### setStrokeColor()

> **setStrokeColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set stroke color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:336](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L336)

***

### setStrokePattern()

> **setStrokePattern**(`pattern`): [`Canvas`](/api-core/classes/canvas/)

Set stroke pattern

#### Parameters

• **pattern**: `number`[]

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:352](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L352)

***

### setStrokeWidth()

> **setStrokeWidth**(`width`): [`Canvas`](/api-core/classes/canvas/)

Set stroke width

#### Parameters

• **width**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:344](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L344)

***

### storeState()

> **storeState**(): [`Canvas`](/api-core/classes/canvas/)

Store current canvas state into a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:237](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L237)

***

### strokeArc()

> **strokeArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an arc. angles are started from 3'clock in degree (0~360).

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1166)

***

### strokeCurve()

> **strokeCurve**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:999](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L999)

***

### strokeEllipse()

> **strokeEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:683](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L683)

***

### strokePath()

> **strokePath**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1259](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1259)

***

### strokePolygon()

> **strokePolygon**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1084](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1084)

***

### strokeRect()

> **strokeRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:455](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L455)

***

### strokeRoundRect()

> **strokeRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rounded rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:545](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L545)

***

### textMetric()

> **textMetric**(`text`): [`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

Get Text Metric
Ref: https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics

Values:
- ascent: Distance from the baseline to the top of the box.
- descent: Distance from the baseline to the bottom of the box.
- actualAscent: Distance from the baseline to the top of the font
  (varies for each character: "." is a small value, "|" is a large value).
- actualDescent: Distance from the baseline to the bottom of the font
  (varies for each character).

Hints:
- ascent + descent = height
- ascent + descent > actualAscent + actualDescent

#### Parameters

• **text**: `string`

#### Returns

[`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

#### Source

[graphics/graphics.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1371)

***

### translate()

> **translate**(`x`, `y`): `void`

Translate transform

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Source

[graphics/graphics.ts:321](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L321)
