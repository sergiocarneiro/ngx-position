import { ElementRef, OnInit } from "@angular/core";
import { AnchorDirection, Axis } from "../../types";
import { addEvent, getComputedTranslate as getComputedTranslation } from "../../utils";

/**
 * The base functionallity that all alignment directives share.
 */
export abstract class AligmentDirective implements OnInit
{
    // #region Properties
    /**
     * Determines whether or not the anchor is currently rendered in the window, even if it's invisible.
     * @returns `true` if the anchor is currently rendered in the window, even if it's invisible.
     */
    protected get isAnchorRendered(): boolean
    {
        return (getComputedStyle(this.anchor).display !== "none");
    }

    /**
     * Determines whether or not it's safe to retrieve measuring properties.
     * @returns `true` if it's safe to retrieve measuring properties.
     */
    protected get canMeasure(): boolean
    {
        return this.isAnchorRendered;
    }
    // #endregion

    // #region Fields
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
    protected measurementDuration = 8000;

    /**
     * Whether or not the element should adjust and re-align itself when the window resizes.
     */
    protected adjustWithWindow = true;

    /**
     * Whether or not the element should apply the anchor's X translation on itself.
     */
    protected applyTranslation = true;

    protected hasInitialized: boolean;
    // #endregion

    // #region Initialization
    constructor(element: ElementRef)
    {
        this.element = element.nativeElement;
    }

    ngOnInit()
    {
        // Listen to window resize events
        addEvent(window, "resize", () =>
        {
            if (this.adjustWithWindow)
            {
                this.update();
            }
        });

        // Declare the view as initialized after passing the measuring time
        setTimeout(() =>
        {
            this.hasInitialized = true;
        },
        this.measurementDuration);
    }

    /**
     * Initializes the directive, **if not initialized already**.
     *
     * @param anchorID (Optional) - The anchor element's ID on the document
     */
    initialize(anchorDirection: AnchorDirection, anchorID?: string)
    {
        if (this.hasInitialized)
        {
            return;
        }

        // Get anchor
        if (!this.anchor)
        {
            // Find anchor from ID
            if (anchorID)
            {
                this.anchor = document.getElementById(anchorID);
            }
            // Assign sibling as anchor
            else
            {
                if (anchorDirection === "before")
                {
                    this.anchor = (this.element.previousElementSibling as HTMLElement);
                }
                else {
                    this.anchor = (this.element.nextElementSibling as HTMLElement);
                }
            }
        }

        this.element.style.position = "absolute";

        this.update();
    }

    /**
     * Initializes the directive, **if not initialized already**,
     * for an element that will have its anchor placed before it
     * in the HTML markup hierarchy.
     *
     * @param anchorID (Optional) - The anchor element's ID on the document.
     */
    initializeForPrevious(anchorID?: string)
    {
        this.initialize("before", anchorID);
    }

    /**
     * Initializes the directive, **if not initialized already**,
     * for an element that will have its anchor placed after it
     * in the HTML markup hierarchy.
     *
     * @param anchorID (Optional) - The anchor element's ID on the document
     */
    initializeForNext(anchorID?: string)
    {
        this.initialize("after", anchorID);
    }
    // #endregion

    // #region Abstract
    /**
     * The method that is called each time the alignment needs to be re-evaluated.
     */
    protected abstract update(): void;
    // #endregion

    // #region Accessors
    protected getAnchorTranslation(axis: Axis): number
    {
        return getComputedTranslation(this.anchor, axis);
    }
    // #endregion
}
