import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[left]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class LeftPositionDirective
{
    /**
     * The distance from left.
     */
    @Input() left: string;

    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;    
    }

    ngOnInit() {
        this.element.style.left = this.left;
    }
}