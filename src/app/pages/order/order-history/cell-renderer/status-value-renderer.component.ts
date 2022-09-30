import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'status-value-renderer',
  template: ` <div class="badge badge-{{ statusClass }}">{{ cellValue }}</div> `
})
export class StatusValueRenderer implements ICellRendererAngularComp {
  public cellValue!: string;
  public statusClass!: string;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
    this.statusClass = this.getStatusClass(params);
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.agInit(params);
    return true;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.data.statusText ? params.data.statusText : params.value;
  }

  getStatusClass(params: ICellRendererParams) {
    switch (params.data.status) {
      case 0:
        return 'light';
      case 1:
        return 'secondary';
      case 2:
        return 'warning';
      case 3:
        return 'success';
      case 4:
        return 'danger';
      case 5:
        return 'danger';
      case 6:
        return 'secondary';
      case 7:
        return 'secondary';
      case 8:
        return 'info';
      default:
        return 'light';
    }
  }
}
