import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JustifyContentComponent } from './justify-content/justify-content.component'
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

const flexRoutes: Routes = [
  {
    path: 'flex/justify-content',
    component: JustifyContentComponent,
  },
  {
    path: 'flex/align-items',
    component: AlignItemsComponent,
  },
  {
    path: 'flex/flex-direction',
    component: FlexDirectionComponent,
  },
  {
    path: 'flex/order',
    component: OrderComponent,
  },
  {
    path: 'flex/align-self',
    component: AlignSelfComponent,
  },
  {
    path: 'flex/flex-wrap',
    component: FlexWrapComponent,
  },
  {
    path: 'flex/flex-flow',
    component: FlexFlowComponent,
  },
  {
    path: 'flex/align-content',
    component: AlignContentComponent,
  },
  {
    path: 'flex/flex-grow',
    component: FlexGrowComponent,
  },
  {
    path: 'flex/flex-shrink',
    component: FlexShrinkComponent,
  },
  {
    path: 'flex/flex-basis',
    component: FlexBasisComponent,
  },
  {
    path: 'flex/flex',
    component: FlexComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(flexRoutes),
  ],
  exports: [
    RouterModule,
  ]
 })

export class FlexRoutingModule { }
