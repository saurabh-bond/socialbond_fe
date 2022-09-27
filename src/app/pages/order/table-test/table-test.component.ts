import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowNode } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html'
})
export class TableTestComponent {
  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    { field: '_id' },
    { field: 'link', minWidth: 180 },
    { field: 'quantity' },
    { field: 'price' }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true
  };

  public rowData!: any[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;

    this.http
      .post<any>('http://localhost:3000/api/v1/orderHistory', {})
      .subscribe((data) => params.api!.setRowData(data.data.slice(0, 50)));
  }
}
