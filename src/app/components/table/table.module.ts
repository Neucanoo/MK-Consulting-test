import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,

    MatRippleModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {
}
