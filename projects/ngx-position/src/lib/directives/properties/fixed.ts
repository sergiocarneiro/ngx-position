import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[fixed]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class FixedPositionDirective
{
    constructor(element: ElementRef) {
        element.nativeElement.style.position = "fixed";
    }
}