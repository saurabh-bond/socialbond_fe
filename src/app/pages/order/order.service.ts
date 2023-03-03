import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { IApiResponse } from 'src/app/modules/interfaces/api-response';
import { BehaviorSubject, Observable, Subject, of, throwError } from 'rxjs';
import { IAddOrder } from './add-order/add-order.helper';
import { environment } from '../../../environments/environment';
import { IOrderCount } from 'src/app/modules/interfaces/orderCount';
import { map, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class OrderService {
  filteredServices = new Subject();
  orderCountSubject: BehaviorSubject<IOrderCount>;
  orderCount$: Observable<IOrderCount>;

  constructor(private http: HttpClient) {
    this.getUserOrderCount().subscribe((data) => {
      this.orderCountSubject.next(data.data);
    });
    this.orderCountSubject = new BehaviorSubject<IOrderCount>(undefined);
    this.orderCount$ = this.orderCountSubject.asObservable();
  }

  getServiceCategories(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${API_URL}/getServiceCategories`);
  }

  getAllServices(filters?: {
    service_type?: string;
    service_category?: string;
  }): Observable<IApiResponse> {
    let queryParams = new HttpParams();
    let service_type = filters.service_type ? filters.service_type : '';
    let service_category = filters.service_category
      ? filters.service_category
      : '';
    queryParams = queryParams.append('st', service_type);
    queryParams = queryParams.append('sc', service_category);
    return this.http.get<IApiResponse>(`${API_URL}/getAllServices`, {
      params: queryParams
    });
  }

  fetchIgPostDetails(
    postUrl: string,
    urlType: string
  ): Observable<IApiResponse> {
    return this.http
      .post<IApiResponse>(`${API_URL}/fetchIgPostDetails`, {
        postUrl: postUrl,
        urlType: urlType
      })
      .pipe(
        catchError((err) => {
          if (err.status && err.error.message) {
            return throwError(err.error.message);
          }
          if (err instanceof HttpErrorResponse) {
            if (err.status === 0) {
              return throwError(
                'Unable to Connect to the Server. Please try after sometime.'
              );
            }
          }
          return of(undefined);
        })
      );
  }

  addOrder(orderRequestData: IAddOrder) {
    console.log('Order Request Data', orderRequestData);
    let postData = {
      service_id: orderRequestData.selectService,
      link: orderRequestData.link,
      quantity: orderRequestData.quantity,
      split_order: {
        set: orderRequestData.splitOrdersSet,
        run: orderRequestData.splitOrders.run,
        interval: orderRequestData.splitOrders.interval
      },
      start_time: orderRequestData.scheduleOrdersSet
        ? Math.floor(new Date(orderRequestData.scheduleOrders).getTime() / 1000)
        : null
    };
    return this.http.post<IApiResponse>(`${API_URL}/placeOrder`, postData);
  }

  getUserOrderCount() {
    return this.http.get<IApiResponse>(`${API_URL}/getUserOrderCount`);
  }
}
