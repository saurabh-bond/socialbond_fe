import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { CreatedAtValueRenderer } from './cell-renderer/created-at-value-renderer.component';
import { LinkValueRenderer } from './cell-renderer/link-value-renderer.component';
import { StatusValueRenderer } from './cell-renderer/status-value-renderer.component';
import { UpdatedAtValueRenderer } from './cell-renderer/updated-at-value-renderer.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {
  private gridApi!: GridApi;
  public rowSelection: 'single' | 'multiple' = 'multiple';

  public columnDefs: ColDef[] = [
    {
      field: '',
      maxWidth: 40,
      filter: false,
      sortable: false,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    },
    { headerName: 'Order ID', field: '_id', maxWidth: 240 },
    {
      field: 'link',
      minWidth: 220,
      cellRenderer: LinkValueRenderer,
      sortable: false
    },
    { field: 'quantity' },
    { field: 'price' },
    { field: 'statusText', minWidth: 160, cellRenderer: StatusValueRenderer },
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

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.dataCall();
  }

  dataCall() {
    this.http
      .post<any>('http://localhost:3000/api/v1/orderHistory', {})
      .subscribe((data) => {
        // var idSequence = 1;
        // data.data.forEach(function (item: any) {
        //   item.id = idSequence++;
        // });
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
