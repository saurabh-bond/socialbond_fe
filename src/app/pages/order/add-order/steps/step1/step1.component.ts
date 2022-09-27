import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../order.service';
import { IAddOrder } from '../../add-order.helper';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html'
})
export class Step1Component implements OnInit, OnDestroy {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<IAddOrder>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<IAddOrder>;

  serviceCategories: any[];
  @Output() serviceCategoriesFetched = new EventEmitter();
  isLoading = false;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, true);
    this.orderService.getServiceCategories().subscribe((response) => {
      if (response.statusCode === 200) {
        this.serviceCategories = response.data;
        this.serviceCategoriesFetched.emit(response.data);
      } else {
        this.serviceCategories = [];
      }
    });
  }

  initForm() {
    this.form = this.fb.group({
      selectCategory: [this.defaultValues.selectCategory, [Validators.required]]
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      // clearing services value as service list will be updated.
      val.selectService = '';
      this.defaultValues.selectService = '';
      this.updateParentModel(val, true);
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
