import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ILogDisplay } from 'src/app/modules/interfaces/log-display';

@Component({
  selector: 'app-lists-widget5',
  templateUrl: './lists-widget5.component.html'
})
export class ListsWidget5Component implements OnInit, OnChanges {
  displayBtnTools = false;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() logs: Array<ILogDisplay> = [];
  @Input() dateFormat: string = 'dd-mm-yyyy';
  availableStyles = [
    'success',
    'primary',
    'secondary',
    'warning',
    'info',
    'danger',
    'dark'
  ];
  textNormalClass = 'fw-normal text-muted';
  textBoldClass = 'fw-bold text-gray-800';
  textBolderClass = 'fw-bolder text-gray-800';
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.logs.forEach((log) => {
      log.textFont =
        log.textFont === 'normal'
          ? this.textNormalClass
          : log.textFont === 'bold'
          ? this.textBoldClass
          : this.textBolderClass;
      log.style =
        !log.style || log.style === ''
          ? this.availableStyles[
              Math.floor(Math.random() * this.availableStyles.length)
            ]
          : log.style;
    });
  }
}
