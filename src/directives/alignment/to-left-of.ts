import { Directive, ElementRef, Input } from "@angular/core";

import { AligmentDirective } from "./aligment";

@Directive({
    selector: "[toLeftOf]"
})

/**
 * Places a component to the left of another one,
 * by making use of absolute positioning or by chaging its width,
 * depending on the selected mode.
 * 
 * It will check the anchor's position during the first 8 seconds of initialization,
 * then stays static in the last position set.
 */
export class ToLeftOfDirective extends AligmentDirective
{
    /**
     * The id of the element to place the element to the left.
     * 
     * Can be empty, and if so, this will put the element to the left of its **next sibling**.
     */
    @Input() toLeftOf: string;

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
        this.initializeForNext(this.toLeftOf);
    }

    protected update()
    {
        let parent = this.anchor.offsetParent;
        if (this.canMeasure() && parent)
        {
            let parentBox = parent.getBoundingClientRect();

            let right = parentBox.width - this.anchor.offsetLeft;
            if (this.applyTranslation) {
                right -= this.getAnchorTranslation("x");
            }
            
            this.element.style.right = right + "px";
        }
    }
}