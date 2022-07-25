import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdStringComponent } from './td-string.component';

@NgModule({
  declarations: [
    TdStringComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TdStringComponent
  ]
})
export class TdStringModule {
}
