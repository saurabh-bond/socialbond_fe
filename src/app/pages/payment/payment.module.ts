import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentController } from './payment.component';

@NgModule({
  declarations: [PaymentController],
  imports: [
    CommonModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PaymentController }])
  ]
})
export class PaymentModule {}
