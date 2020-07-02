import { NgModule } from "@angular/core";

//
// Alignment
//
import { AboveOfDirective } from "./directives/alignment/above-of.directive";
import { BelowOfDirective } from "./directives/alignment/below-of.directive";
import { ToLeftOfDirective } from "./directives/alignment/to-left-of.directive";
import { ToRightOfDirective } from "./directives/alignment/to-right-of.directive";
import { ToCenterOfDirective } from "./directives/alignment/to-center-of.directive";
import { ToCenterXOfDirective } from "./directives/alignment/to-center-x-of.directive";
import { ToCenterYOfDirective } from "./directives/alignment/to-center-y-of.directive";

//
// CSS properties
//
import { AbsolutePositionDirective } from "./directives/properties/absolute";
import { FixedPositionDirective } from "./directives/properties/fixed";
import { RelativePositionDirective } from "./directives/properties/relative";
import { StaticPositionDirective } from "./directives/properties/static";
import { LeftPositionDirective } from "./directives/properties/left";
import { RightPositionDirective } from "./directives/properties/right";
import { TopPositionDirective } from "./directives/properties/top";
import { BottomPositionDirective } from "./directives/properties/bottom";
import { ZIndexDirective, ZDirective } from "./directives/properties/z-index";

@NgModule(
{
    declarations:
    [
        // Alignment
        AboveOfDirective,
        BelowOfDirective,
        ToLeftOfDirective,
        ToRightOfDirective,
        ToCenterOfDirective,
        ToCenterXOfDirective,
        ToCenterYOfDirective,

        // CSS Properties
        AbsolutePositionDirective,
        FixedPositionDirective,
        RelativePositionDirective,
        StaticPositionDirective,
        LeftPositionDirective,
        RightPositionDirective,
        TopPositionDirective,
        BottomPositionDirective,
        ZIndexDirective,
        ZDirective
    ],
    exports:
    [
        // Alignment
        AboveOfDirective,
        BelowOfDirective,
        ToLeftOfDirective,
        ToRightOfDirective,
        ToCenterOfDirective,
        ToCenterXOfDirective,
        ToCenterYOfDirective,

        // CSS Properties
        AbsolutePositionDirective,
        FixedPositionDirective,
        RelativePositionDirective,
        StaticPositionDirective,
        LeftPositionDirective,
        RightPositionDirective,
        TopPositionDirective,
        BottomPositionDirective,
        ZIndexDirective,
        ZDirective
    ]
})
export class NgxPositionModule {}
