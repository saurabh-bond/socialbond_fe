import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'action-button-renderer',
  template: `
    <td class="pr-0 text-right">
      <a
        *ngIf="placeOrderBtnDisplay"
        class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
        title="Place Order"
      >
        <span
          [inlineSVG]="'./assets/media/icons/duotune/general/gen019.svg'"
          class="svg-icon svg-icon-3"
        ></span>
      </a>
      <a
        class="btn btn-icon btn-bg-light btn-active-color-info btn-sm me-1"
        (click)="btnClickedHandler($event)"
      >
        <span
          [inlineSVG]="'./assets/media/icons/duotune/general/gen045.svg'"
          class="svg-icon svg-icon-3"
        ></span>
      </a>
      <a class="btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1">
        <span
          [inlineSVG]="'./assets/media/icons/duotune/art/art005.svg'"
          class="svg-icon svg-icon-3"
        >
        </span>
      </a>
      <a class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm">
        <span
          [inlineSVG]="'./assets/media/icons/duotune/general/gen027.svg'"
          class="svg-icon svg-icon-3"
        ></span>
      </a>
    </td>
  `
})
export class ActionButtonRenderer implements ICellRendererAngularComp {
  private params: any;
  public placeOrderBtnDisplay = false;
  public editOrderBtnDisplay = false;
  public deleteOrderBtnDisplay = false;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.displayButtons();
    // this.params.data.sta
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.agInit(params);
    return true;
  }

  btnClickedHandler(event) {
    this.params.clicked(this.params.data);
    // alert('clicking on btn');
  }

  displayButtons() {
    this.placeOrderBtnDisplay = this.params.data.status === -1 ?? false;
    this.editOrderBtnDisplay = this.params.data.status === 0 ?? false;
    this.deleteOrderBtnDisplay = this.params.data.status === -1 ?? false;
    console.log('palceOrderBtn', this.placeOrderBtnDisplay);
  }
}
