import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslationModule } from '../i18n';
import { SupportComponent } from './support.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SupportRoutingModule } from './support-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { CancellationRefundPolicyComponent } from './components/cancellation-refund-policy/cancellation-refund-policy.component';

@NgModule({
  declarations: [
    SupportComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    TermsAndConditionsComponent,
    CancellationRefundPolicyComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SupportRoutingModule,
    InlineSVGModule
  ]
})
export class SupportModule {}
