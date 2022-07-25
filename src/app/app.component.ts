import { Component, ViewEncapsulation } from '@angular/core';
import { TdDatetimeComponent } from './components/table/components/td-datetime/td-datetime.component';
import { TdStringComponent } from './components/table/components/td-string/td-string.component';
import { ColumnTypes } from './constants/columnTypes';
import { Statuses, statusLabels } from './constants/statuses';
import { Column } from './interfaces/table';
import { TableService } from './services/table/table.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public tableData: any[];

  public columnTypes = ColumnTypes;

  public columns: Column[] = [
    { 
      show: true,
      label: 'Версія',
      key: 'version',
      type: ColumnTypes.String
    },
    { 
      show: true,
      label: 'Дата створення',
      key: 'created_at',
      type: ColumnTypes.Datetime
    },
    { 
      show: true,
      label: 'Статус',
      key: 'status',
      type: ColumnTypes.Value,
      values: statusLabels,
    },
    { 
      show: true,
      label: 'Дата зміни статусу',
      key: 'updated_at',
      type: ColumnTypes.Datetime
    },
    { 
      show: true,
      label: '',
      key: 'actions',
      type: ColumnTypes.Buttons,
      buttons: [
        {
          label: 'Продовжити',
          style: 'outline',
          show: (row: any): boolean => row.status === Statuses.Not_Completed,
          fn: (row: any): void => console.log(row)
        },
        {
          label: 'Переглянути',
          style: 'flat',
          show: (row: any): boolean => row.status !== Statuses.Not_Completed,
          fn: (row: any): void => console.log(row)
        },
      ]
    },
  ];

  public customColumns = {
    version: TdStringComponent,
    created_at: TdDatetimeComponent,
  }

  // public showColumns: any = {
  //   version: true,
  //   created_at: true,
  //   status: true,
  //   updated_at: true
  // }


  constructor(
    private tableService: TableService
  ) {
    this.tableData = tableService.tableData;
  }

  public onAddRowWithRandomData() {
    const start = new Date(0), end = new Date();
    const randomRow = {
      version: (Math.random() + 1).toString(36).substring(7),
      created_at: +new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
      status: Math.round(Math.random() * 3),
      updated_at: +new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    };

    this.tableData = this.tableData.concat([randomRow]);
  }
  

}
