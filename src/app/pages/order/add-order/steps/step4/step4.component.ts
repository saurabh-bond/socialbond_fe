import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Helpers } from 'src/app/helpers';
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

  orderDetails: any = {};
  orderCost = 0;
  igPostImg = '';

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
    if (this.postDetails !== undefined) {
      this.postDetailsFetched.emit(this.postDetails);
      this.igPostImg = Helpers.processIgURL(this.postDetails.post_img_url);
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
      let price_per_k = serviceDetails.price_per_k;
      let quantity = this.defaultValues.quantity;
      let order_price = Helpers.calculateOrderPrice(price_per_k, quantity);
      let service_fees = 0;
      let scheduleOrdersMsg = this.defaultValues.scheduleOrdersSet
        ? `Set (Order will be process after ${this.defaultValues.scheduleOrders})`
        : `Not set (Order will be process ASAP)`;
      let splitOrdersMsg =
        this.defaultValues.splitOrdersSet &&
        this.defaultValues.splitOrders.run > 0
          ? `Set (Order will be divided into ${
              this.defaultValues.splitOrders.run
            }
        sub-orders of quantity (~ ${Math.floor(
          quantity / this.defaultValues.splitOrders.run
        )}) with set interval delay of
        ${Helpers.convertSecsToRelativeTime(
          this.defaultValues.splitOrders.interval
        )})`
          : 'Not set (Quantity will be delivered all together without delay) ';

      this.orderDetails = {
        service: serviceDetails.service_name,
        status: serviceDetails.service_details,
        service_min_quantity: serviceDetails.min_quantity,
        service_max_quantity: serviceDetails.max_quantity,
        quantity: quantity,
        price_per_k: '$' + price_per_k,
        order_price: '$' + order_price,
        subtotal: '$' + order_price,
        service_fees: '$' + service_fees,
        grandTotal: '$' + (order_price + service_fees),
        current_balance: '$' + this.defaultValues.user_credits,
        scheduleOrdersMsg: scheduleOrdersMsg,
        splitOrdersMsg: splitOrdersMsg
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
