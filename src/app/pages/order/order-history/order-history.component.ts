import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { CreatedAtValueRenderer } from './cell-renderer/created-at-value-renderer.component';
import { LinkValueRenderer } from './cell-renderer/link-value-renderer.component';
import { StatusValueRenderer } from './cell-renderer/status-value-renderer.component';
import { UpdatedAtValueRenderer } from './cell-renderer/updated-at-value-renderer.component';
import { ActionButtonRenderer } from './cell-renderer/action-button-renderer.component';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MoodRenderer } from './cell-renderer/mood-renderer.component';
import { MoodEditor } from './cell-renderer/mood-editor.component';
import './style.css';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {
  private gridApi!: GridApi;
  public rowSelection: 'single' | 'multiple' = 'multiple';

  public columnDefs: ColDef[] = [
    // {
    //   field: '',
    //   maxWidth: 40,
    //   filter: false,
    //   sortable: false,
    //   headerCheckboxSelection: true,
    //   headerCheckboxSelectionFilteredOnly: true,
    //   checkboxSelection: true
    // },
    { headerName: 'Order ID', field: '_id', maxWidth: 240 },
    {
      field: 'link',
      minWidth: 220,
      cellRenderer: LinkValueRenderer,
      sortable: false
    },
    { headerName: 'Service', field: 'service_id.service_name', minWidth: 240 },
    { field: 'quantity' },
    { field: 'price' },
    {
      headerName: 'Status',
      field: 'statusText',
      minWidth: 160,
      cellRenderer: StatusValueRenderer
    },
    {
      headerName: 'Added',
      field: 'created_at',
      minWidth: 160,
      filter: 'agDateColumnFilter',
      // add extra parameters for the date filter
      filterParams: {
        // provide comparator function
        comparator: (filterLocalDateAtMidnight, cellValue) => {
          var dateAsString = cellValue;
          dateAsString = cellValue.split('T');
          dateAsString = dateAsString[0];

          if (dateAsString == null) {
            return 0;
          }

          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          const dateParts = dateAsString.split('-');
          const day = Number(dateParts[2]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[0]);
          const cellDate = new Date(year, month, day);

          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
          return 0;
        }
      },
      cellRenderer: CreatedAtValueRenderer
    },
    {
      headerName: 'Updated',
      field: 'updated_at',
      cellRenderer: UpdatedAtValueRenderer,
      filter: false
    },
    {
      field: 'Actions',
      width: 100,
      cellRenderer: MoodRenderer,
      cellEditor: MoodEditor,
      cellEditorPopup: true,
      editable: true
    },
    {
      headerName: 'Action',
      filter: false,
      sortable: false,
      pinned: 'right',
      lockPinned: true,
      cellRenderer: ActionButtonRenderer,
      cellRendererParams: {
        clicked: (field: any) => {
          console.log('details btn clicked', field);
          Swal.fire('Good job!', 'You clicked the button!', 'success');
          alert(`${field} was clicked`);
        }
      },
      cellStyle: { 'background-color': 'lightyellow' }
    }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true,
    resizable: true
  };

  public rowData!: any[];

  // set background colour on even rows again, this looks bad, should be using CSS classes
  public getRowStyle = (params) => {
    if (params.data.status === -1) {
      return { background: 'lightcoral' };
    }
  };

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.dataCall();
  }

  dataCall() {
    this.http
      .post<any>(`${environment.apiUrl}/orderHistory`, {})
      .subscribe((data) => {
        // var idSequence = 1;
        // data.data.forEach(function (item: any) {
        //   item.id = idSequence++;
        // });
        console.log(data.data);
        this.gridApi!.setRowData(data.data);
      });
  }

  refreshCells() {
    this.dataCall();
  }

  searchOrders() {
    this.gridApi.setQuickFilter(
      (document.getElementById('searchOrders') as HTMLInputElement).value
    );
  }
}
