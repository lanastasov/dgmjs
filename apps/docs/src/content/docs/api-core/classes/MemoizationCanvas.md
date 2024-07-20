---
editUrl: false
next: false
prev: false
title: "MemoizationCanvas"
---

Memoization Canvas

## Constructors

### new MemoizationCanvas()

> **new MemoizationCanvas**(): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L290)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/memoization-canvas.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L287)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/memoization-canvas.ts:277](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L277)

***

### do

> **do**: `DO`[]

#### Source

[graphics/memoization-canvas.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L278)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/memoization-canvas.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L283)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/memoization-canvas.ts:284](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L284)

***

### font

> **font**: `string`

#### Source

[graphics/memoization-canvas.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L286)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/memoization-canvas.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L285)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/memoization-canvas.ts:279](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L279)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/memoization-canvas.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L288)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/memoization-canvas.ts:280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L280)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/memoization-canvas.ts:282](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L282)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/memoization-canvas.ts:281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L281)

## Methods

### arc()

> **arc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an arc

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:953](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L953)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:304](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L304)

***

### curve()

> **curve**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a curve

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:797](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L797)

***

### draw()

> **draw**(`canvas`): `void`

Draw memoized drawing objects

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:1123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1123)

***

### drawImage()

> **drawImage**(`image`, `x`, `y`, `width`, `height`, `radius`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw Image

#### Parameters

• **image**: `HTMLImageElement`

• **x**: `number`

• **y**: `number`

• **width**: `number`

• **height**: `number`

• **radius**: `number` \| `number`[]

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1088](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1088)

***

### ellipse()

> **ellipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:706](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L706)

***

### fillArc()

> **fillArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled arc. angles are started from 12'clock in degree.

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:912](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L912)

***

### fillCurve()

> **fillCurve**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:769](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L769)

***

### fillEllipse()

> **fillEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a filled ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:663](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L663)

***

### fillPath()

> **fillPath**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:998](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L998)

***

### fillPolygon()

> **fillPolygon**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:833](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L833)

***

### fillRect()

> **fillRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a filled rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:450](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L450)

***

### fillRoundRect()

> **fillRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a filled round rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:549](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L549)

***

### fillText()

> **fillText**(`x`, `y`, `text`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Fill a text

#### Parameters

• **x**: `number`

• **y**: `number`

text baseline (metric.ascent - not the top of text)

• **text**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1072](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1072)

***

### line()

> **line**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a line

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:387](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L387)

***

### path()

> **path**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1028](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1028)

***

### polygon()

> **polygon**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:861](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L861)

***

### polyline()

> **polyline**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw polyline

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:715](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L715)

***

### rect()

> **rect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:485](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L485)

***

### roundRect()

> **roundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a round rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:605](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L605)

***

### setAlpha()

> **setAlpha**(`alpha`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set alpha

#### Parameters

• **alpha**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L371)

***

### setCanvas()

> **setCanvas**(`canvas`): `void`

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L308)

***

### setFillColor()

> **setFillColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set fill color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:339](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L339)

***

### setFillStyle()

> **setFillStyle**(`style`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set fill style

#### Parameters

• **style**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:347](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L347)

***

### setFont()

> **setFont**(`font`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set font

#### Parameters

• **font**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L363)

***

### setFontColor()

> **setFontColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set font color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:355](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L355)

***

### setRoughness()

> **setRoughness**(`roughness`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set roughness

#### Parameters

• **roughness**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:379](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L379)

***

### setStrokeColor()

> **setStrokeColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:315](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L315)

***

### setStrokePattern()

> **setStrokePattern**(`pattern`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke pattern

#### Parameters

• **pattern**: `number`[]

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L331)

***

### setStrokeWidth()

> **setStrokeWidth**(`width`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke width

#### Parameters

• **width**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L323)

***

### strokeArc()

> **strokeArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an arc. angles are started from 3'clock in degree (0~360).

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:870](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L870)

***

### strokeCurve()

> **strokeCurve**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:742](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L742)

***

### strokeEllipse()

> **strokeEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:621](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L621)

***

### strokeFreehand()

> **strokeFreehand**(`path`, `thinning`, `tailTaper`, `headTaper`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a freehand stroke

#### Parameters

• **path**: `number`[][]

• **thinning**: `number`= `0`

Thinning of the path

• **tailTaper**: `number`= `0`

Taper at the start of the path. value must be 0~1

• **headTaper**: `number`= `0`

Taper at the end of the path value must be 0~1

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1042](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1042)

***

### strokePath()

> **strokePath**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:969](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L969)

***

### strokePolygon()

> **strokePolygon**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:806](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L806)

***

### strokeRect()

> **strokeRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a rect lines

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:416](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L416)

***

### strokeRoundRect()

> **strokeRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a round rect lines

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:494](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L494)

***

### textMetric()

> **textMetric**(`text`): [`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

Get Text Metric

#### Parameters

• **text**: `string`

#### Returns

[`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

#### Source

[graphics/memoization-canvas.ts:1115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1115)
