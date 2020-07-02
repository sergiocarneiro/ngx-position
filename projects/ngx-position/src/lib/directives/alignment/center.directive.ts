// import { Directive, ElementRef, Input } from "@angular/core";

// import { AligmentDirective } from "./aligment";

// @Directive({
//     selector: "[center]"
// })

// /**
//  * Places a component in the center of the parent.
//  *
//  * Makes use of absolute positioning to achieve it.
//  *
//  * It will check the position during the first 8 seconds of initialization,
//  * then stays static in the last position set.
//  *
//  * NOTE: if it's bigger than the parent, then this won't have any effect.
//  */
// export class CenterDirective extends AligmentDirective
// {
//     /**
//      * The amount of time after initialization that this should be
//      * checking the target's properties and position the element accordingly.
//      *
//      * *Defaults to 8 seconds.*
//      */
//     @Input() measurementDuration: number = 8000;

//     /**
//      * Defines if the element should adjust and re-align itself when the window size changes.
//      */
//     @Input() adjustWithWindow: boolean = true;

//     /**
//      * Defines if the element should apply the anchor's Y translation on itself.
//      */
//     @Input() applyTranslation: boolean = true;

//     /**
//      * Holds the values initially assigned on the component.
//      */
//     private initialValues: {
//         left: string,
//         top: string,
//         transform: string
//     }

//     constructor(element: ElementRef) {
//         super(element);
//     }

//     ngAfterViewChecked() {
//         if (!this.hasInitialized) {
//             this.initialValues = {
//                 left: this.element.style.left,
//                 top: this.element.style.top,
//                 transform: this.element.style.transform
//             };
//             console.log("INITIALIZED CENTER");
//             console.dir(this.initialValues);
//         }
//     }

//     protected update()
//     {
//         let parent = this.anchor.offsetParent;
//         if (this.canMeasure && parent)
//         {
//             const parentBox = parent.getBoundingClientRect();
//             const elementBox = this.element.getBoundingClientRect();

//             let transform = this.initialValues.transform;

//             // Horizontal
//             if (elementBox.width < parentBox.width) {
//                 this.element.style.left = "50%";
//             } else {
//                 this.element.style.left = this.initialValues.left;
//             }

//             // Vertical
//             if (elementBox.height < parentBox.height) {
//                 this.element.style.top = "50%";
//             } else {
//                 this.element.style.top = this.initialValues.left;
//             }

//             let bottom = parentBox.height - this.anchor.offsetTop;
//             if (this.applyTranslation) {
//                 bottom -= this.getAnchorTranslation("y");
//             }

//             this.element.style.bottom = bottom + "px";
//         }
//     }
// }
