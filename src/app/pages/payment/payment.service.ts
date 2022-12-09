import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from 'src/app/modules/interfaces/api-response';
import { environment } from 'src/environments/environment';

const PAYMENT_URL = environment.apiUrl + '/payment';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}

  getOrderDetails(amount: number, currency: string): Observable<IApiResponse> {
    let postData = {
      amount: amount * 100,
      currency: currency
    };
    return this.http.post<IApiResponse>(`${PAYMENT_URL}/createOrder`, postData);
  }

  savePaymentResponse(response, success: boolean) {
    response.success = success;
    return this.http.post<IApiResponse>(
      `${PAYMENT_URL}/saveResponse`,
      response
    );
  }
}
