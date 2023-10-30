import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import * as EventEmitter from 'events';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, interval, throwError } from 'rxjs';
import { catchError, first, startWith, take } from 'rxjs/operators';
import { OrderService } from '../../../order.service';
import { IAddOrder } from '../../add-order.helper';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html'
})
export class Step5Component implements OnInit, OnChanges {
  @Input() orderSubmitted: Partial<{ message: string; orderId: string }>;
  orderMessage = '';
  orderLogs: any = [];
  orderLogs$: BehaviorSubject<[]> = new BehaviorSubject<any>([]);
  logTitle = 'Order Timeline';
  logSubtitle = '';
  displayDraftAlert = false;
  constructor(
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    console.log('step5 value', this.orderSubmitted);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', this.orderSubmitted);
    let orderId = this.orderSubmitted.orderId;
    this.orderMessage = this.orderSubmitted.message;
    if (orderId !== '') {
      interval(60000 * 5)
        .pipe(startWith(0), take(10))
        .subscribe(() => this.getOrderLogs(orderId));
    }
  }

  getOrderLogs(orderId) {
    this.orderLogs = [];
    this.orderService
      .getOrderDetails(orderId)
      .pipe(
        catchError((err) => {
          this.toastr.error(err.error.message);
          return throwError(err);
        })
      )
      .subscribe((orderDetails) => {
        if (orderDetails.statusCode === 200) {
          console.log('order details ', orderDetails.data);
          this.logSubtitle = `#${orderDetails.data._id} - ${orderDetails.data.statusText}`;
          this.displayDraftAlert = orderDetails.data.status === -1;

          if (
            orderDetails.data.message_logs &&
            orderDetails.data.message_logs.length > 0
          ) {
            orderDetails.data.message_logs.forEach((log) => {
              this.orderLogs.push({
                log: log.log,
                date: log.date,
                style: '',
                textFont: 'bolder'
              });
              this.orderLogs$.next(this.orderLogs);
            });
          }
        }
      });
  }
}
