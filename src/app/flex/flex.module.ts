import { NgModule } from '@angular/core';

import { FlexRoutingModule } from './flex.routing';

import { JustifyContentComponent } from './justify-content/justify-content.component';
import { AlignItemsComponent } from './align-items/align-items.component';
import { FlexDirectionComponent } from './flex-direction/flex-direction.component';
import { OrderComponent } from './order/order.component';
import { AlignSelfComponent } from './align-self/align-self.component';
import { FlexWrapComponent } from './flex-wrap/flex-wrap.component';
import { FlexFlowComponent } from './flex-flow/flex-flow.component';
import { AlignContentComponent } from './align-content/align-content.component';
import { FlexGrowComponent } from './flex-grow/flex-grow.component';
import { FlexShrinkComponent } from './flex-shrink/flex-shrink.component';
import { FlexBasisComponent } from './flex-basis/flex-basis.component';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  imports: [
    FlexRoutingModule,
  ],
  declarations: [
    JustifyContentComponent,
    AlignItemsComponent,
    FlexDirectionComponent,
    OrderComponent,
    AlignSelfComponent,
    FlexWrapComponent,
    FlexFlowComponent,
    AlignContentComponent,
    FlexGrowComponent,
    FlexShrinkComponent,
    FlexBasisComponent,
    FlexComponent,
  ],
})

export class FlexModule { }
