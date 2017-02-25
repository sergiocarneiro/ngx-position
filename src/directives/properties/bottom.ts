import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[bottom]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class BottomPositionDirective
{
    /**
     * The distance from bottom.
     */
    @Input() bottom: string;

    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;    
    }

    ngOnInit() {
        this.element.style.bottom = this.bottom;
    }
}