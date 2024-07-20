---
editUrl: false
next: false
prev: false
title: "FreehandFactoryHandler"
---

Freehand Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new FreehandFactoryHandler()

> **new FreehandFactoryHandler**(`id`, `options`?): [`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1359](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1359)

## Properties

### closed

> **closed**: `boolean` = `false`

#### Source

[handlers/freehand-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L16)

***

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/freehand-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L14)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/freehand-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L13)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/freehand-handler.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L12)

***

### draggingPoints

> **draggingPoints**: `number`[][] = `[]`

#### Source

[handlers/freehand-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L15)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1356](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1356)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1357)

***

### shape

> **shape**: `null` \| [`Freehand`](/api-core/classes/freehand/) = `null`

#### Source

[handlers/freehand-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L17)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`activate`](/api-core/classes/handler/#activate)

#### Source

[editor.ts:1385](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1385)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`complete`](/api-core/classes/handler/#complete)

#### Source

[editor.ts:1376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1376)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`deactivate`](/api-core/classes/handler/#deactivate)

#### Source

[editor.ts:1393](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1393)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`drawSelection`](/api-core/classes/handler/#drawselection)

#### Source

[editor.ts:1438](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1438)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/freehand-handler.ts:58](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L58)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/freehand-handler.ts:28](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L28)

***

### keyDown()

> **keyDown**(`editor`, `e`): `boolean`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[handlers/freehand-handler.ts:113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L113)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyUp`](/api-core/classes/handler/#keyup)

#### Source

[editor.ts:1433](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1433)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onActivate`](/api-core/classes/handler/#onactivate)

#### Source

[handlers/freehand-handler.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L123)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onDeactivate`](/api-core/classes/handler/#ondeactivate)

#### Source

[handlers/freehand-handler.ts:127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L127)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Source

[handlers/freehand-handler.ts:74](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L74)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Source

[handlers/freehand-handler.ts:89](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L89)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Source

[handlers/freehand-handler.ts:104](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L104)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/freehand-handler.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L19)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/freehand-handler.ts:40](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L40)
