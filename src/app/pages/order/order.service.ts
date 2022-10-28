import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IApiResponse } from 'src/app/modules/interfaces/api-response';
import { Observable, Subject } from 'rxjs';
import { IAddOrder } from './add-order/add-order.helper';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class OrderService {
  filteredServices = new Subject();

  constructor(private http: HttpClient) {}

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

  fetchIgPostDetails(postUrl: string): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${API_URL}/fetchIgPostDetails`, {
      postUrl: postUrl
    });
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
}
