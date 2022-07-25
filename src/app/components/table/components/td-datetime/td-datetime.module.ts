import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdDatetimeComponent } from './td-datetime.component';

@NgModule({
  declarations: [
    TdDatetimeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TdDatetimeComponent
  ]
})
export class TdDatetimeModule {
}
