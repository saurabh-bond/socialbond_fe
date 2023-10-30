import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../core/layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerContainerCssClasses: string = '';
  currentDateStr: string = new Date().getFullYear().toString();

  refundPolicy = environment.supportUrl + '/refund-policy';
  contactUs = environment.supportUrl + '/contact-us';
  privacyPolicy = environment.supportUrl + '/pivacy-policy';

  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.footerContainerCssClasses =
      this.layout.getStringCSSClasses('footerContainer');
  }
}
