import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CardsModule } from 'src/app/_metronic/partials';
import { WidgetsModule } from 'src/app/_metronic/partials';
import { DataTablesModule } from 'angular-datatables';
import { AgGridModule } from 'ag-grid-angular';

import { AddOrderComponent } from './add-order/add-order.component';
import { Step1Component } from './add-order/steps/step1/step1.component';
import { Step2Component } from './add-order/steps/step2/step2.component';
import { Step3Component } from './add-order/steps/step3/step3.component';
import { Step4Component } from './add-order/steps/step4/step4.component';
import { Step5Component } from './add-order/steps/step5/step5.component';

import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AddOrderComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    RouterModule.forChild([
      { path: 'add', component: AddOrderComponent },
      {
        path: 'history',
        loadChildren: () =>
          import('./order-history/order-history.module').then(
            (m) => m.OrderHistoryModule
          )
      }
    ]),
    CardsModule,
    WidgetsModule,
    DataTablesModule,
    AgGridModule.withComponents([])
  ]
})
export class OrderModule {}
