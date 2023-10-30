import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancellationRefundPolicyComponent } from './components/cancellation-refund-policy/cancellation-refund-policy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { SupportComponent } from './support.component';
import { SupportModule } from './support.module';

const routes: Routes = [
  {
    path: '',
    component: SupportComponent,
    children: [
      {
        path: '',
        redirectTo: 'privacy-policy',
        pathMatch: 'full'
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'terms',
        component: TermsAndConditionsComponent
      },
      {
        path: 'refund-policy',
        component: CancellationRefundPolicyComponent
      },
      { path: '', redirectTo: 'privacy-policy', pathMatch: 'full' },
      { path: '**', redirectTo: 'privacy-policy', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {}
