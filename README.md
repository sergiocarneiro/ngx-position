# [angular-position](https://github.com/sergiocarneiro/angular-position)

[![npm version](https://badge.fury.io/js/angular-position.svg)](https://www.npmjs.com/package/angular-position)

*angular-position* is a set of angular directives that allow to align elements according to another one's position, making use of absolute positioning.

An element can be placed:

* Above
* Below
* To Left
* To Right
* To Center
* To Center X
* To Center Y

Along with this directives, there is also another set that allow to quickly and cleanly apply CSS positioning properties:

* Left | Top | Right | Bottom
* Absolute | Fixed | Relative | Static
* Z-Index

-----------

# Purpose

It is recommended to use CSS whenever it's possible, but in cases like when you have an element with **absolute position** and you still need its bounds to place other elements accordingly, it's not that simple.

That's why this directives were made and solve the problem with no effort.

-----------

# Setup

Install via npm:
```
npm install --save angular-position
```

Include the alignment module in the imports list of your app's module:
```js
import { AlignmentModule } from 'angular-position';

@NgModule({
    imports: [
        AlignmentModule
    ]
})
```

-----------

# Usage
There are two ways to perform the alignment:

### - Basic
You can align an element on another by simply placing the anchor element above/below
the element in the HTML markup hierarchy, depending on the type of alignment.

The order is intuitive:
- **aboveOf**: place the element **before** the anchor;
- **belowOf**: place the element **after** the anchor;
- **toLeftOf**: place the element **before** the anchor;
- **toRightOf**: place the element **after** the anchor;
- **toCenterOf**: place the element **after** the anchor;
- **toCenterXOf**: place the element **after** the anchor;
- **toCenterYOf**: place the element **after** the anchor;

Example:
```html
<span aboveOf>Will be placed above the div</span>
<div>Element auto-assigned as the anchor</div>
<span belowOf>Will be placed below the div</span>
```

### - With ID
You can align an element on another by giving its `id` as the parameter:
```html
<span [aboveOf]="anchor-element">Alignment Element</span>
<div id="anchor-element"></div>
```

### - Properties
For the CSS properties directives, you just need to write their name in the HTML tag.
In case if the property has a value, just pass it like this:
```html
<div absolute [top]="'5px'">This will position the div 5px top</div>
<div [z]="2">sets the z-index to 2 (can also be written in full)</div>
```

-----------

# Options
The alignment behavior can be customized with the following attributes:
```html
<span aboveOf [measurementDuration]="8000" [applyTranslation]="true" [adjustOnWindow]="true"></span>
```

### - measurementDuration: number
Defines the amount of time, in milliseconds, that the directive should be measuring the anchor.

Because elements usually take some time to be completely initialized and take their final position and dimensions,
it's useful to set some seconds of measurement instead of only once.

*Defaults to 8 seconds.*

### - applyTranslation: boolean
In cases that the anchor has a translate transform, this defines if that translation should be taken into account when calculating the position.

*Defaults to true.*

### - adjustOnWindow: boolean
Defines if the element should adjust and re-align itself when the window size changes.

*Defaults to true.*