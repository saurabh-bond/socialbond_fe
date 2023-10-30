import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IAddOrder } from '../../add-order.helper';
import { IService } from 'src/app/modules/interfaces/service';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html'
})
export class Step3Component implements OnInit {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<IAddOrder>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<IAddOrder>;

  ONE_DAY_MSECONDS = 86400000;
  scheduledDateConfig = {
    altInput: true,
    altFormat: 'F j, Y H:i',
    dateFormat: 'Y-m-d H:i',
    enableTime: true,
    defaultDate: [],
    minDate: 'today',
    maxDate: new Date(Date.now() + this.ONE_DAY_MSECONDS * 30) // 30 days from now
  };
  serviceDetails: IService;
  minRun: number = 0;
  maxRun: number = 20;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());

    this.scheduledDateConfig.defaultDate = [this.defaultValues.scheduleOrders];
    flatpickr('#scheduleOrders', this.scheduledDateConfig);

    let serviceDetailsDefaultValues = this.defaultValues
      .serviceDetails as Array<IService>;
    this.serviceDetails = serviceDetailsDefaultValues.find(
      (s: any) => s._id === this.defaultValues.selectService
    );
  }

  initForm() {
    this.form = this.fb.group({
      scheduleOrdersSet: [this.defaultValues.scheduleOrdersSet, []],
      scheduleOrders: [this.defaultValues.scheduleOrders, []],
      splitOrdersSet: [this.defaultValues.splitOrdersSet, []],
      run: [this.defaultValues.splitOrders.run, []],
      interval: [this.defaultValues.splitOrders.interval, []]
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      let formValue = {
        splitOrders: {
          run: this.form.value.run,
          interval: this.form.value.interval
        },
        ...val
      };
      this.updateParentModel(formValue, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);

    this.form.controls.scheduleOrdersSet.valueChanges.subscribe((val) => {
      if (val) {
        this.form.controls['scheduleOrders'].clearValidators();
        this.form.controls['scheduleOrders'].setValidators([
          Validators.required
        ]);
        this.form.controls['scheduleOrders'].updateValueAndValidity();
        console.log('Validation updated...');
      } else {
        this.form.controls['scheduleOrders'].clearValidators();
        this.form.controls['scheduleOrders'].updateValueAndValidity();
      }
    });

    this.form.controls.splitOrdersSet.valueChanges.subscribe((val) => {
      if (val) {
        let possibleMaxRun = Math.floor(
          this.defaultValues.quantity / this.serviceDetails.min_quantity
        );
        this.maxRun =
          possibleMaxRun < this.maxRun ? possibleMaxRun : this.maxRun;
        this.form.controls['run'].clearValidators();
        this.form.controls['run'].setValidators([
          Validators.required,
          Validators.min(this.minRun),
          Validators.max(this.maxRun)
        ]);
        this.form.controls['run'].updateValueAndValidity();

        this.form.controls['interval'].clearValidators();
        this.form.controls['interval'].setValidators([Validators.required]);
        this.form.controls['interval'].updateValueAndValidity();
      } else {
        this.form.controls['run'].clearValidators();
        this.form.controls['run'].updateValueAndValidity();
        this.form.controls['interval'].clearValidators();
        this.form.controls['interval'].updateValueAndValidity();
      }
    });
  }

  checkForm() {
    return !this.form.invalid;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
