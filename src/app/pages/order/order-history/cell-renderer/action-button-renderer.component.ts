import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'action-button-renderer',
  template: `
    <td class="pr-0 text-right">
      <a
        class="btn btn-icon btn-secondary btn-sm cursor-pointer"
        (click)="btnClickedHandler($event)"
      >
        <span class="navi-icon">
          <i class="fa fa-info-circle fa-2x"></i>
        </span>
      </a>
      <a
        class="btn btn-icon btn-primary btn-hover-primary btn-sm mx-3 cursor-pointer"
        ><span class="svg-icon svg-icon-md svg-icon-primary"
          ><svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
            <title>Stockholm-icons / Communication / Write</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Stockholm-icons-/-Communication-/-Write"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <rect id="bound" x="0" y="0" width="24" height="24"></rect>
              <path
                d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                id="Path-11"
                fill="#000000"
                fill-rule="nonzero"
                transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
              ></path>
              <path
                d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                id="Path-57"
                fill="#000000"
                fill-rule="nonzero"
                opacity="0.3"
              ></path>
            </g></svg></span
        ><!----></a
      ><a
        class="btn btn-icon btn-danger btn-hover-primary btn-sm cursor-pointer"
        ><span class="svg-icon svg-icon-md svg-icon-primary"
          ><svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
            <title>Stockholm-icons / General / Trash</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Stockholm-icons-/-General-/-Trash"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <rect id="bound" x="0" y="0" width="24" height="24"></rect>
              <path
                d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                id="round"
                fill="#000000"
                fill-rule="nonzero"
              ></path>
              <path
                d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                id="Shape"
                fill="#000000"
                opacity="0.3"
              ></path>
            </g></svg></span
        ><!----></a
      >
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
