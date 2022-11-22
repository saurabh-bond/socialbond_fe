import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { IApiResponse } from 'src/app/modules/interfaces/api-response';
import { IOrderCount } from 'src/app/modules/interfaces/orderCount';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<UserType>;
  orderCount$: Observable<IOrderCount>;
  animateCountUpOptions = { enableScrollSpy: true };
  constructor(private auth: AuthService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.orderCount$ = this.orderService.orderCountSubject.asObservable();
    console.log('Order count --- ', this.orderService.orderCount$);
    console.log('User  --- ', this.user$);
  }
}
