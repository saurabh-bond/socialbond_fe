import { environment } from '../../../../environments/environment';

export class PaymentOptionsModel {
  key: string;
  amount: string;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: string;
  prefill: {};
  notes: {};
  theme: {};

  setOptions(_options: unknown) {
    const options = _options as PaymentOptionsModel;
    // let auth: AuthService;
    // let userName = '';
    // let userEmail = '';
    // get current user email and name
    // this.auth.currentUserSubject.subscribe((user) => {
    //   console.log('user details ', user);
    //   userEmail = user.email;
    //   userName = user.name;
    // });

    this.key = environment.rzpKey;
    this.amount = options.amount;
    this.currency = options.currency;
    this.name = options.name || 'SOCIALBOND';
    this.description = options.description || '';
    this.image =
      options.image || './assets/media/logos/SB_icon_transparent.png';
    this.order_id = options.order_id;
    this.handler = options.handler;
    this.prefill = options.prefill || {};
    this.notes = options.notes || {};
    this.theme = options.theme || {
      color: '#3399cc'
    };
  }
}
