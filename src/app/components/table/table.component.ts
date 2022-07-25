import { AfterViewInit, ChangeDetectorRef, Component, Input, QueryList, ViewChildren, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ColumnTypes } from 'src/app/constants/columnTypes';
import { Column } from 'src/app/interfaces/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements AfterViewInit {
  @ViewChildren('columns', { read: ViewContainerRef }) customColumnsRef: QueryList<ViewContainerRef>;

  @Input() set columns(val: Column[]) {
    this.$columns = val;
    this.checkCustomColumns();
  }
  @Input() set data(val: any) {
    this.$data = val;
    this.checkCustomColumns();
  }
  @Input() set customColumns(val: any) {
    this.$customColumns = val;
    this.checkCustomColumns();
  }
  

  public $data: any[];

  public $columns: any[];
  public columnTypes = ColumnTypes;

  public $customColumns: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }
  ngAfterViewInit(): void {
    this.checkCustomColumns();
  }

  private checkCustomColumns() {
    setTimeout(() => {
      console.log('Start');
      if (!(this.$data && this.$data.length)) { return; }
      if (!(this.$columns && this.$columns.length)) { return; }
      if (!this.$customColumns) { return; }
      if (!(this.customColumnsRef && this.customColumnsRef.length)) { return; }
      this.changeDetectorRef.detach();
      const data = this.getValidData();
  
      const colsLength = this.$columns.length;
      for (const key in this.$customColumns) {
        const offset = this.$columns.findIndex(el => el.key === key);
        if (offset === -1) { continue; }
        const component = this.$customColumns[key];
  
        data.forEach((row, rI) => {
          const index = offset + rI * colsLength;
          this.customColumnsRef.get(index)?.clear();
          const createdComponent: any = this.customColumnsRef.get(index)?.createComponent(component).instance;
          console.log(62, createdComponent);
          createdComponent.setValue(row[key]);
        });
      }
      setTimeout(() => {
        this.changeDetectorRef.reattach();
        console.log('End');
      });
    })
  }

  private getValidData(): any[] {
    const newTable = this.$data.map((row) => {
      const newRow: any = {};
      this.$columns.forEach((column) => {
        if (column.key) {
          newRow[column.key] = row[column.key] || null;
        }
      });
      return newRow;
    });
    return newTable;
  }

}
