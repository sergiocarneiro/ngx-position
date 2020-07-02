# [ngx-position](https://github.com/sergiocarneiro/ngx-position)

[![npm version](https://badge.fury.io/js/ngx-position.svg)](https://www.npmjs.com/package/ngx-position)

* [Setup](#setup)
* [Purpose](#purpose)
* [Usage](#usage)
* [Properties](#properties)
* [CSS Utilities](#css-utilities)

*ngx-position* is a set of angular directives that allow to position elements relative to another, making use of absolute positioning.

Is intended to be used when CSS can't solve the problem.

Types of positioning supported:

* Above | Below
* To Left  | To Right
* To Center | To Center X | To Center Y

Along with these, there is also a set of [utility directives](#css-utilities) that allow to quickly apply CSS positioning properties.

```html
<div bottom absolute [z]="999"></div>
```

-----------

# Setup

Install via npm:
```
npm install --save ngx-position
```

Include the module in the imports list of your app's module:
```js
import { NgxPositionModule } from 'ngx-position';

@NgModule({
    imports: [
        NgxPositionModule
    ]
})
```

-----------

# Purpose

It is recommended to use CSS whenever it's possible, but there are some cases that it's not that easy or simply not possible.

Below are some common use cases.

### Absolute-to-absolute element positioning

Position one element relative to another that is absolute-positioned.

### Non-hierarchical positioning

Any element can align to another, no matter their location in the hierarchy.

_This is specially useful when you're creating components and you need to position something relative to the main content, for example._

-----------

# Usage

**Aligning an element on another** can be made by simply placing the element above/below (depending on the type of alignment) the target element in the HTML hierarchy. The order is intuitive.

| Directive | Order Relative to Target |
| ---------------|----------------|
| **aboveOf** | before |
| **belowOf** | after |
| **toLeftOf** | before |
| **toRightOf** | after |
| **toCenterOf** | after |
| **toCenterXOf** | after |
| **toCenterYOf** | after |

#### Example
```html
<span aboveOf>Will be placed above div</span>
<div></div>
<span belowOf>Will be placed below div</span>
```

## Non-hierarchical positioning
You can align **any** element on another by simply passing its `id`.
```html
<div id="anchor-element"></div>
<!-- ... -->
<span [aboveOf]="anchor-element"></span>
```

-----------

# Properties
The alignment behavior can be customized with the following attributes:
```html
<span aboveOf [measurementDuration]="8000" [applyTranslation]="true" [adjustWithWindow]="true"></span>
```

### measurementDuration: number
Defines the amount of time, in milliseconds, that the directive should be measuring the anchor.

Because elements usually take some time to be completely initialized and take their final position and dimensions,
it's useful to set some seconds of measurement instead of only once.

*Defaults to 8 seconds.*

### applyTranslation: boolean
In cases that the anchor has a translate transform, this defines if that translation should be taken into account when calculating the position.

*Defaults to true.*

### adjustWithWindow: boolean
Defines if the element should adjust and re-align itself when the window size changes.

*Defaults to true.*

-----------

# CSS Utilities

For the CSS properties directives, you just need to write their name in the HTML tag.

And if the property has a value, just pass it like this:

```html
<div absolute top="5px">
    This will position the div 5px top
</div>

<div [z]="2">
    Sets the z-index to 2
    (Can also be written [z-index]="2")
</div>
```

## Supported Properties

| Directive | Generated CSS |
| ---------------|----------------|
| **absolute** | `position: absolute` |
| **relative** | `position: relative` |
| **fixed** | `position: fixed` |
| **static** | `position: static` |
|-|-|
| **left** | `left: $value` |
| **top** | `top: $value` |
| **right** | `right: $value` |
| **bottom** | `bottom: $value` |
|-|-|
| **z-index** | `z-index: $value` |
| **z** | `z-index: $value` |
