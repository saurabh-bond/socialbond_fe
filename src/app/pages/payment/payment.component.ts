import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from './payment.service';
import { environment } from '../../../environments/environment';
import { PaymentOptionsModel } from './models/payment-options.model';
import { ToastrService } from 'ngx-toastr';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentController implements OnInit {
  paymentForm: FormGroup;
  purchaseInstructions = [
    'Minimum Purchase 100 credits = Rs 100',
    'Credits Amount, 1 Credit=1 INR',
    'Purchased amount will be shown in your credits',
    'Use valid and real information about you',
    "Don't use Proxies or VPN",
    'Payments can be refused , please check your payment status before you open a ticket.',
    'Purchases are final and we cannot refund credits back to your UPI, debit or credit card'
  ];
  submitBtn;
  currencies = ['inr', 'usd'];

  message = 'Payment not started';
  paymentOptions1 = {
    key: environment.rzpKey,
    amount: '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: '',
    name: 'SOCIOBOND',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    order_id: '', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: this.paymentSuccessHandler,
    prefill: {
      name: 'Saurabh Kumar',
      email: 'talktosaurabhkr@gmail.com',
      contact: '8340248023',
      method: ''
    },
    notes: {
      address: 'Razorpay Corporate Office'
    },
    theme: {
      color: '#3399cc'
    },
    modal: {
      ondismiss: function () {
        console.log('Checkout form closed');
      }
    }
  };

  constructor(private payment: PaymentService, private toastr: ToastrService) {}

  ngOnInit() {
    this.submitBtn = document.getElementById('submitBtn');
    this.paymentForm = new FormGroup({
      currency: new FormControl('inr'),
      amount: new FormControl(100, [Validators.required, Validators.min(100)])
    });
    // TODO change default value for USD ( $10 ) -- patchValue
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.submitBtn.setAttribute('data-kt-indicator', 'on');
      this.initiatePayment();
    }
    console.log(this.paymentForm);
  }

  /**
   * This function is used to call createOrder razorpay function
   * unique orderId will be fetched from API call and passed to payment function
   */
  initiatePayment() {
    this.payment
      .getOrderDetails(
        this.paymentForm.value.amount,
        this.paymentForm.value.currency
      )
      .subscribe((response) => {
        let data = response.data;
        this.paymentOptions1.amount = data.amount;
        this.paymentOptions1.currency = data.currency;
        this.paymentOptions1.order_id = data.id;
        this.doPayment();
      });
  }

  paymentSuccessHandler(response) {
    // this.toastr.info(
    //   `Payment is successful, Txn id: ${response.razorpay_payment_id}`
    // );
    this.payment.savePaymentResponse(response, true).subscribe((saved) => {
      console.log('Details saved in db...', saved);
      // this.toastr.success(
      //   'Txn details captured, Credits will be added in sometime.'
      // );
    });
    // .subscribe((saved) => {

    // } )
    console.log('Success Handler Response', response);
    // alert('Success Handler');
    // alert(response.razorpay_payment_id);
    // alert(response.razorpay_order_id);
    // alert(response.razorpay_signature);
    console.log('Response', response);
  }

  doPayment() {
    console.log('payment options --', this.paymentOptions1);
    var rzp = new Razorpay(this.paymentOptions1);
    rzp.open();
    rzp.on('payment.failed', function (response) {
      alert('Failure Handler');
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    this.submitBtn.removeAttribute('data-kt-indicator');
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    console.log('Payment is successful ...asdf...asdf');
  }
}
