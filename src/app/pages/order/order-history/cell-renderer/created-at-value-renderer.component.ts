import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Helpers } from '../../../../helpers';

@Component({
  selector: 'created-at-value-renderer',
  template: ` <div class="badge badge-light">{{ cellValue }}</div> `
})
export class CreatedAtValueRenderer implements ICellRendererAngularComp {
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
    return params.value
      ? new Date(parseInt(params.value) * 1000).toLocaleString()
      : '-';
  }
}
