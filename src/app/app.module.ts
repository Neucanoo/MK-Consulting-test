import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { TableModule } from './components/table/table.module';
import { TableMaterialModule } from './components/table-material/table-material.module';


import { TdStringModule } from './components/table/components/td-string/td-string.module';
import { TdDatetimeModule } from './components/table/components/td-datetime/td-datetime.module';

registerLocaleData(localeUk);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatCheckboxModule,
    MatButtonModule,

    TableModule,
    TableMaterialModule,
    TdStringModule,
    TdDatetimeModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'uk' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }