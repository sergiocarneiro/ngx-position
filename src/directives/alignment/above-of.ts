import { Directive, ElementRef, Input } from "@angular/core";

import { AligmentDirective } from "./aligment";

@Directive({
    selector: "[aboveOf]"
})

/**
 * Places a component above another one.
 * 
 * Makes use of absolute positioning to achieve it.
 * 
 * It will check the position during the first 8 seconds of initialization,
 * then stays static in the last position set.
 */
export class AboveOfDirective extends AligmentDirective
{
    /**
     * The id of the element to place this element above.
     * 
     * Can be empty, and if so, this will put the element above its **next sibling**
     */
    @Input() aboveOf: string;

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
        this.initializeForNext(this.aboveOf);
    }

    protected update()
    {
        let parent = this.anchor.offsetParent;
        if (this.canMeasure() && parent)
        {
            let parentBox = parent.getBoundingClientRect();

            let bottom = parentBox.height - this.anchor.offsetTop;
            if (this.applyTranslation) {
                bottom -= this.getAnchorTranslation("y");
            }

            this.element.style.bottom = bottom + "px";
        }
    }
}