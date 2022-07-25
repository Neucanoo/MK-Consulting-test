import { Component } from '@angular/core';

@Component({
  selector: 'app-td-datetime',
  templateUrl: './td-datetime.component.html',
  styleUrls: ['./td-datetime.component.scss']
})
export class TdDatetimeComponent {
  
  public value: any;

  public setValue(val: any) {
    setTimeout(() => {
      this.value = +val;
    })
  }
}
