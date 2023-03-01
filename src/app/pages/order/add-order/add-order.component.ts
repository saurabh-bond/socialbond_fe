import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  of,
  throwError
} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAddOrder, inits } from './add-order.helper';
import { Buffer } from 'buffer';
import { AuthService, UserType } from 'src/app/modules/auth';
import { OrderService } from '../order.service';
import { ToastrService } from 'ngx-toastr';
import { APIResponse } from 'src/app/modules/auth/models/api-response.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  formsCount = 5;
  order$: BehaviorSubject<IAddOrder> = new BehaviorSubject<IAddOrder>(inits);
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private unsubscribe: Subscription[] = [];
  // serviceCategories$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  serviceCategories: any[];
  postDetails: any = undefined;
  Buffer = Buffer;
  postDetails$: BehaviorSubject<[]> = new BehaviorSubject<any>([]);

  user$: Observable<UserType>;

  constructor(
    private auth: AuthService,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUser$;
    this.user$.subscribe((user) => {
      this.updateAccount({ user_credits: user.credits }, false);
    });
  }

  updateAccount = (part: Partial<IAddOrder>, isFormValid: boolean) => {
    const currentAccount = this.order$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.order$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
  };

  nextStep() {
    const nextStep = this.currentStep$.value + 1;
    if (nextStep > this.formsCount) {
      return;
    }
    if (this.currentStep$.value === this.formsCount - 1) {
      // submit the form
      this.submitForm();
    }
    this.currentStep$.next(nextStep);
  }

  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }

  onCategoriesFetched(serviceCategories) {}

  onServicesFetched(services) {}

  onPostDetailsFetched(postDetails: any) {
    this.postDetails = postDetails;
    this.postDetails$.next(postDetails);
  }

  submitForm() {
    this.orderService
      .addOrder(this.order$.value)
      .pipe(
        catchError((err) => {
          if (err.status && err.error.message) {
            this.toastr.error(err.error.message);
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
      )
      .subscribe((responseData: APIResponse) => {
        if (responseData.statusCode === 201) {
          this.toastr.success(responseData.message);
        } else {
          this.toastr.error(responseData.message);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
