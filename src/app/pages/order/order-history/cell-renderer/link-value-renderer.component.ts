import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Helpers } from '../../../../helpers';

@Component({
  selector: 'link-value-renderer',
  template: `
    <a
      class="badge badge-primary d-flex"
      style="margin-top: 9px;"
      href="{{ cellValue }}"
      target="_blank"
    >
      <i class="icon-2x la text-light socicon-instagram"></i>
      <div
        style="white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              width: 150px;
              direction: rtl;
              text-align: left;"
      >
        {{ cellValue }}
      </div>
    </a>
  `
})
export class LinkValueRenderer implements ICellRendererAngularComp {
  public cellValue!: string;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.agInit(params);
    return true;
  }

  getValueToDisplay(params: ICellRendererParams) {
    // let relativeTime = Helpers.getRelativeTime(params.value);
    return params.value ? params.value : '-';
  }
}
