import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Observable,
  Subscription,
  of,
  throwError,
  BehaviorSubject
} from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { first, catchError, finalize } from 'rxjs/operators';
import { APIResponse } from '../../models/api-response.model';
import { ToastrService } from 'ngx-toastr';

enum ErrorStates {
  NotSubmitted,
  HasError,
  NoError
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  errorState: ErrorStates = ErrorStates.NotSubmitted;
  errorStates = ErrorStates;
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  errorMsg: string = '';

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  ngOnInit(): void {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.forgotPasswordForm.controls;
  }

  initForm() {
    this.forgotPasswordForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ])
      ]
    });
  }

  submit() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.errorState = ErrorStates.NotSubmitted;
    this.isLoadingSubject.next(true);
    const forgotPasswordSubscr = this.authService
      .forgotPassword(this.f.email.value)
      .pipe(
        first(),
        catchError((error) => {
          this.errorState = ErrorStates.HasError;
          this.errorMsg = error.error.message;
          this.toastr.error(this.errorMsg);
          return throwError(this.errorMsg);
        }),
        finalize(() => this.isLoadingSubject.next(false))
      )
      .subscribe((result: APIResponse) => {
        console.log('results', result);
        if (result.statusCode === 200) {
          this.errorState = ErrorStates.NoError;
          this.toastr.success(result.message);
        } else {
          this.errorMsg = result.message;
          this.toastr.error(this.errorMsg);
          this.errorState = ErrorStates.HasError;
        }
      });
    this.unsubscribe.push(forgotPasswordSubscr);
  }
}
