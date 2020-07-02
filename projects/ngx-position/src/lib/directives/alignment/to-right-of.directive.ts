import { Directive, ElementRef, Input, AfterViewChecked } from "@angular/core";

import { AligmentDirective } from "./aligment";

/**
 * Places a component to the right of another one, by chaging its width.
 *
 * It will check the position during the first 8 seconds of initialization,
 * then stays static in the last position set.
 */
@Directive({
    selector: "[toRightOf]"
})
export class ToRightOfDirective extends AligmentDirective implements AfterViewChecked
{
    /**
     * The id of the element to place the element to the right.
     *
     * Can be empty, and if so, this will put the element to the right of its **previous sibling**.
     */
    @Input() toRightOf: string;

    /**
     * The amount of time after initialization that this should be
     * checking the target's properties and position the element accordingly.
     *
     * *Defaults to 8 seconds.*
     */
    @Input() measurementDuration = 8000;

    /**
     * Defines if the element should adjust and re-align itself when the window size changes.
     */
    @Input() adjustWithWindow = true;

    /**
     * Defines if the element should apply the anchor's X translation on itself.
     */
    @Input() applyTranslation = true;

    constructor(element: ElementRef)
    {
        super(element);
    }

    ngAfterViewChecked()
    {
        this.initializeForPrevious(this.toRightOf);
    }

    protected update()
    {
        if (this.canMeasure)
        {
            let left = this.anchor.offsetLeft + this.anchor.offsetWidth;
            if (this.applyTranslation) {
                left += this.getAnchorTranslation("x");
            }

            this.element.style.left = left + "px";
        }
    }
}
