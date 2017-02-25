import { ElementRef, Input } from "@angular/core";
import { Axis } from "../../types";
import { Utils } from "../../utils";

/**
 * Defines the directions that the anchor can be positioned,
 * relative to the element, in the HTML markup hierarchy.
 */
export type AnchorDirection = "before" | "after";

/**
 * The base functionallity that all alignment directives share.
 */
export abstract class AligmentDirective
{
    /**
     * The reference for the element itself.
     */
    protected element: HTMLElement;

    /**
     * The element to where this element will base the alignment on.
     */
    protected anchor: HTMLElement;

    /**
     * The amount of time after initialization that this should be
     * checking the target's properties and position the element accordingly.
     * 
     * *Defaults to 8 seconds.*
     */
    protected measurementDuration: number = 8000;

    /**
     * Defines if the element should adjust and re-align itself when the window size changes.
     */
    protected adjustOnWindow: boolean = true;

    /**
     * Defines if the element should apply the anchor's X translation on itself.
     */
    protected applyTranslation: boolean = true;

    protected hasInitialized: boolean;

    /**
     * **Params:**
     * - **element**: ElementRef
     * - **measurementDuration** *(default: 8s)*: number - the amount of time after initialization that this should be checking the target's properties and position the element accordingly.
     */
    constructor(element: ElementRef) {
        this.element = element.nativeElement;
    }

    /**
     * The method that is called each time the alignment needs to be re-evaluated.
     */
    protected abstract update() : void;

    ngOnInit()
    {
        // Listen to window resize events
        Utils.addEvent(window, "resize", () => {
            if (this.adjustOnWindow) {
                this.update();
            }
        });

        // Declare the view as initialized after passing the measuring time
        setTimeout(() => {
            this.hasInitialized = true;
        }, this.measurementDuration);
    }

    /**
     * Initializes the directive, **if not initialized already**.
     * 
     * **Params:**
     * - **anchorDirection**: AnchorDirection - *before* or *after* the element
     * - **anchorID** *(optional)*: string - the anchor element's ID on the document
     */
    initialize(anchorDirection: AnchorDirection, anchorID?: string)
    {
        if (!this.hasInitialized)
        {
            if (!this.anchor) {
                if (anchorID) {
                    this.anchor = document.getElementById(anchorID);
                } else {
                    if (anchorDirection == "before") {
                        this.anchor = <HTMLElement> this.element.previousElementSibling;
                    } else {
                        this.anchor = <HTMLElement> this.element.nextElementSibling;
                    }
                }
            }

            this.element.style.position = "absolute";

            this.update();
        }
    }

    /**
     * Initializes the directive, **if not initialized already**,
     * for an element that will have its anchor placed before it
     * in the HTML markup hierarchy.
     * 
     * **Params:**
     * - **anchorID** *(optional)*: string - the anchor element's ID on the document
     */
    initializeForPrevious(anchorID?: string) {
        this.initialize("before", anchorID);
    }

    /**
     * Initializes the directive, **if not initialized already**,
     * for an element that will have its anchor placed after it
     * in the HTML markup hierarchy.
     * 
     * **Params:**
     * - **anchorID** *(optional)*: string - the anchor element's ID on the document
     */
    initializeForNext(anchorID?: string) {
        this.initialize("after", anchorID);
    }

    /**
     * **Returns:** `true` if the anchor is currently rendered in the window, even if it's invisible.
     */
    protected isAnchorRendered() : boolean {
        let isAnchorRendered = (getComputedStyle(this.anchor).display != "none");
        return isAnchorRendered;
    }

    /**
     * **Returns:** `true` if it's safe to retrieve measuring properties.
     */
    protected canMeasure() : boolean {
        return this.isAnchorRendered();
    }

    protected getAnchorTranslation(axis: Axis) : number {
        return Utils.getComputedTranslate(this.anchor, axis);
    }
}