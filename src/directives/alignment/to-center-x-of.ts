import { Directive, ElementRef, Input } from "@angular/core";

import { AligmentDirective } from "./aligment";

@Directive({
    selector: "[toCenterXOf]"
})

/**
 * Places a component aligned horizontally to another one.
 * 
 * Makes use of absolute positioning to achieve it.
 * 
 * It will check the position during the first 8 seconds of initialization,
 * then stays static in the last position set.
 */
export class ToCenterXOfDirective extends AligmentDirective
{
    /**
     * The id of the element to place this element above.
     * 
     * Can be empty, and if so, this will put the element centered
     * horizontally on its **previous sibling**
     */
    @Input() toCenterXOf: string;

    /**
     * The amount of time after initialization that this should be
     * checking the target's properties and position the element accordingly.
     * 
     * *Defaults to 8 seconds.*
     */
    @Input() measurementDuration: number = 8000;

    /**
     * Defines if the element should adjust and re-align itself when the window size changes.
     */
    @Input() adjustOnWindow: boolean = true;

    /**
     * Defines if the element should apply the anchor's X translation on itself.
     */
    @Input() applyTranslation: boolean = true;

    constructor(element: ElementRef) {
        super(element);
    }

    ngAfterViewChecked() {
        this.initializeForPrevious(this.toCenterXOf);
    }

    protected update()
    {
        if (this.canMeasure())
        {
            let anchorX = this.anchor.offsetLeft + (this.anchor.offsetWidth / 2);

            if (this.applyTranslation) {
                anchorX -= this.getAnchorTranslation("x");
            }

            let elementX = this.element.offsetLeft + (this.element.offsetWidth / 2);

            this.element.style.marginLeft = anchorX - elementX + "px";
        }
    }
}