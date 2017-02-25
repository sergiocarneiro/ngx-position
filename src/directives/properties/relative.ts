import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[relative]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class RelativePositionDirective
{
    constructor(element: ElementRef) {
        element.nativeElement.style.position = "relative";
    }
}