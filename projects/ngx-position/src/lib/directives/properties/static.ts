import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[static]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class StaticPositionDirective
{
    constructor(element: ElementRef) {
        element.nativeElement.style.position = "static";
    }
}