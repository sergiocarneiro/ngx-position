import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[top]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class TopPositionDirective
{
    /**
     * The distance from top.
     */
    @Input() top: string;

    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;    
    }

    ngOnInit() {
        this.element.style.top = this.top;
    }
}