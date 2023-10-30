import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { OrderHistoryComponent } from './order-history.component';
import { ActionButtonRenderer } from './cell-renderer/action-button-renderer.component';

@NgModule({
  declarations: [ActionButtonRenderer],
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbTooltipModule,
    RouterModule.forChild([{ path: '', component: OrderHistoryComponent }])
  ]
})
export class OrderHistoryModule {}
