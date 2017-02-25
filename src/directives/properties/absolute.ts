import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[absolute]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class AbsolutePositionDirective
{
    constructor(element: ElementRef) {
        element.nativeElement.style.position = "absolute";
    }
}