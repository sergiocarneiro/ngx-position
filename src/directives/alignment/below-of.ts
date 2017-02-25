import { Directive, ElementRef, Input } from "@angular/core";

import { AligmentDirective } from "./aligment";

@Directive({
    selector: "[belowOf]"
})

/**
 * Places a component below another one.
 * 
 * Makes use of absolute positioning to achieve it.
 * 
 * It will check the position during the first 8 seconds of initialization,
 * then stays static in the last position set.
 */
export class BelowOfDirective extends AligmentDirective
{
    /**
     * The id of the element to place this element below.
     * 
     * Can be empty, and if so, this will put the element below its **previous sibling**.
     */
    @Input() belowOf: string;

    /**
     * Defines if the element's width will occupie the available area at the bottom of the anchor.
     */
    @Input() fill: boolean;

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
     * Defines if the element should apply the anchor's Y translation on itself.
     */
    @Input() applyTranslation: boolean = true;
    
    constructor(element: ElementRef) {
        super(element);
    }

    ngAfterViewChecked() {
        this.initializeForPrevious(this.belowOf);
    }

    protected update()
    {
        if (this.canMeasure())
        {
            let top = this.anchor.offsetTop + this.anchor.offsetHeight;
            if (this.applyTranslation) {
                top += this.getAnchorTranslation("y");
            }

            this.element.style.top = top + "px";
        }
    }
}