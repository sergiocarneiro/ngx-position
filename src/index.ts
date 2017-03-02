import { NgModule } from '@angular/core';

//
// Absolute Positioning
//
import { AboveOfDirective } from "./directives/alignment/above-of";
import { BelowOfDirective } from "./directives/alignment/below-of";
import { ToLeftOfDirective } from "./directives/alignment/to-left-of";
import { ToRightOfDirective } from "./directives/alignment/to-right-of";
import { ToCenterOfDirective } from "./directives/alignment/to-center-of";
import { ToCenterXOfDirective } from "./directives/alignment/to-center-x-of";
import { ToCenterYOfDirective } from "./directives/alignment/to-center-y-of";
export { AboveOfDirective };
export { BelowOfDirective };
export { ToLeftOfDirective };
export { ToRightOfDirective };
export { ToCenterOfDirective };
export { ToCenterXOfDirective };
export { ToCenterYOfDirective };

//
// CSS properties shortcuts
//
import { AbsolutePositionDirective } from "./directives/properties/absolute";
import { FixedPositionDirective } from "./directives/properties/fixed";
import { RelativePositionDirective } from "./directives/properties/relative";
import { StaticPositionDirective } from "./directives/properties/static";
export { AbsolutePositionDirective };
export { FixedPositionDirective };
export { RelativePositionDirective };
export { StaticPositionDirective };

import { LeftPositionDirective } from "./directives/properties/left";
import { RightPositionDirective } from "./directives/properties/right";
import { TopPositionDirective } from "./directives/properties/top";
import { BottomPositionDirective } from "./directives/properties/bottom";
export { LeftPositionDirective };
export { RightPositionDirective };
export { TopPositionDirective };
export { BottomPositionDirective };

import { ZIndexDirective, ZDirective } from "./directives/properties/z-index";
export { ZIndexDirective };
export { ZDirective };

@NgModule(
{
    declarations:
    [
        AboveOfDirective,
        BelowOfDirective,
        ToLeftOfDirective,
        ToRightOfDirective,
        ToCenterOfDirective,
        ToCenterXOfDirective,
        ToCenterYOfDirective,

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
        AboveOfDirective,
        BelowOfDirective,
        ToLeftOfDirective,
        ToRightOfDirective,
        ToCenterOfDirective,
        ToCenterXOfDirective,
        ToCenterYOfDirective,

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

export class AlignmentModule {}