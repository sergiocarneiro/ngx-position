import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[z-index]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class ZIndexDirective
{
    /**
     * The z-index value.
     */
    @Input("z-index") value: string;

    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;    
    }

    ngOnInit() {
        this.element.style.zIndex = this.value;
    }
}


@Directive({
    selector: '[z]'
})

/**
 * Simply applies the property to the element,
 * as you would normally do in CSS, but simpler.
 */
export class ZDirective
{
    /**
     * The z-index value.
     */
    @Input("z") value: string;

    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;    
    }

    ngOnInit() {
        this.element.style.zIndex = this.value;
    }
}