import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Helpers } from '../../../../helpers';

@Component({
  selector: 'updated-at-value-renderer',
  template: ` <div class="badge badge-light-info">{{ cellValue }}</div> `
})
export class UpdatedAtValueRenderer implements ICellRendererAngularComp {
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
    console.log('Calling function ....');
    // let relativeTime = Helpers.getRelativeTime(params.value);
    return params.value ? Helpers.getRelativeTime(params.value) : '-';
  }
}
