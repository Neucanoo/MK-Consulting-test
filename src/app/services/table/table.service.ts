import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  public tableData = [
    {
      version: 'v 1.02',
      created_at: 1609509841000,
      status: 1,
      updated_at: 1609509841000,
      addCol1: null,
      addCol2: null,
      addCol3: null,
    },
    {
      version: 'v 1.01',
      created_at: 1609509841000,
      status: 2,
      // addCol1: null,
      // addCol2: null,
      // addCol3: null,
      // updated_at: 1609509841000
    },
    {
      version: 'v 1.00',
      created_at: 1609509841000,
      status: 3,
      updated_at: 1609509841000,
      addCol1: null,
      addCol2: null,
      addCol3: null,
    },
  ]
}
