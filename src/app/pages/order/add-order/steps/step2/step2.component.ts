import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { of, Subscription, throwError } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { OrderService } from '../../../order.service';
import { IAddOrder, availableStaticValues } from '../../add-order.helper';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html'
})
export class Step2Component implements OnInit {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<IAddOrder>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<IAddOrder>;

  services = [];
  availableStaticValues = availableStaticValues;
  serviceMinQuantity: number;
  serviceMaxQuantity: number;
  @Output() servicesFetched = new EventEmitter();
  postDetails = [];
  @Output() postDetailsFetched = new EventEmitter();

  private unsubscribe: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    let filters = {
      service_type: this.defaultValues.selectType,
      service_category: this.defaultValues.selectCategory
    };
    this.getServices(filters);
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      selectType: [this.defaultValues.selectType, [Validators.required]],
      selectService: [this.defaultValues.selectService, [Validators.required]],
      link: [
        this.defaultValues.link,
        [
          Validators.required
          // Validators.pattern(
          //   '/^(?:https?://)?(?:www.)?(?:instagram.com/p/)([dw-_]+)(?:/)?(?.*)?$/gm'
          // )
        ]
      ],
      quantity: [this.defaultValues.quantity, [Validators.required]]
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      if (this.defaultValues.selectType !== val.selectType) {
        console.log('service called');
        let filters = {
          service_type: val.selectType,
          service_category: this.defaultValues.selectCategory
        };
        // Clearing selected service to empty before fetching new service list
        val.selectService = '';
        this.defaultValues.selectService = '';
        this.getServices(filters);
      }
      console.log('Updating values --->', val);
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    console.log('Form checking....', this.form.valid);
    return !this.form.invalid;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  getServices(filters) {
    this.orderService
      .getAllServices(filters)
      .pipe(
        map((response) => {
          if (response.statusCode === 200) {
            let service_icon =
              availableStaticValues[this.defaultValues.selectCategory].icon;
            return response.data.map((data) => {
              return (data = {
                service_icon: service_icon,
                ...data
              });
            });
          }
        })
      )
      .subscribe((serviceData) => {
        this.services = serviceData;
        this.servicesFetched.emit(serviceData);
      });
  }

  onServiceChange(event) {
    this.serviceMinQuantity = event.target.getAttribute('data-min-quantity');
    this.serviceMaxQuantity = event.target.getAttribute('data-max-quantity');

    // Update validators -- quantity
    this.form.controls['quantity'].clearValidators();
    this.form.controls['quantity'].setValidators([
      Validators.required,
      Validators.min(this.serviceMinQuantity),
      Validators.max(this.serviceMaxQuantity)
    ]);
    this.form.controls['quantity'].updateValueAndValidity();
    // Updating serviceDetails defaultValues as selected service
    this.updateParentModel({ serviceDetails: this.services }, this.checkForm());
  }

  onLinkChange(event: any) {
    console.log(event.target.value);
    let postUrl = event.target.value;
    if (postUrl.trim() === '') {
      return;
    }
    let urlType =
      availableStaticValues[this.defaultValues.selectCategory].urlType;
    this.orderService
      .fetchIgPostDetails(postUrl, urlType)
      .pipe(
        first(),
        catchError((err) => {
          this.toastr.error(err);
          return throwError(err);
        })
      )
      .subscribe((postDetailsResponse) => {
        console.log('Inside step2 component --->', postDetailsResponse);
        if (postDetailsResponse.statusCode === 200) {
          console.log('Inside step2 component --->', postDetailsResponse.data);
          this.postDetails = postDetailsResponse.data;
          this.postDetailsFetched.emit(postDetailsResponse.data);
        }
      });
  }
}
