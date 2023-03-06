import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IService } from 'src/app/modules/interfaces/service';
import { IAddOrder } from '../../add-order.helper';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['../../add-order.component.css']
})
export class Step4Component implements OnInit {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<IAddOrder>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<IAddOrder>;
  @Input() postDetails: Partial<any>;
  @Output() postDetailsFetched = new EventEmitter();

  orderDetails = {};
  orderCost = 0;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
    if (this.postDetails !== undefined) {
      this.postDetailsFetched.emit(this.postDetails);
    }
    let serviceDetailsDefaultValues = this.defaultValues
      .serviceDetails as Array<IService>;
    let serviceDetails: IService = serviceDetailsDefaultValues.find(
      (s: any) => s._id === this.defaultValues.selectService
    );

    this.orderCost =
      Math.round(
        (serviceDetails.price_per_k / 1000) * this.defaultValues.quantity * 1000
      ) / 1000;

    if (serviceDetails) {
      this.orderDetails = {
        Service: serviceDetails.service_name,
        Status: serviceDetails.service_details,
        'Min. Quantity': serviceDetails.min_quantity,
        'Max. Quantity': serviceDetails.max_quantity,
        Quantity: this.defaultValues.quantity,
        'Price Per 1K': '$' + serviceDetails.price_per_k,
        'Current Balance': '$' + this.defaultValues.user_credits
      };
    }
  }

  initForm() {
    this.form = this.fb.group({
      saveCard: ['1']
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !this.form.invalid;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
