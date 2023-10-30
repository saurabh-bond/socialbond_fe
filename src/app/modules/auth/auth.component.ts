import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: '<body[root]>',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  today: Date = new Date();
  termsConditions = environment.supportUrl + '/terms';
  contactUs = environment.supportUrl + '/contact-us';
  privacyPolicy = environment.supportUrl + '/pivacy-policy';

  constructor() {}

  ngOnInit(): void {
    document.body.classList.add('bg-white');
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-white');
  }
}
