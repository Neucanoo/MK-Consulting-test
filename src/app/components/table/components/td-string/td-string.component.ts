import { Component } from '@angular/core';

@Component({
  selector: 'app-td-string',
  templateUrl: './td-string.component.html',
  styleUrls: ['./td-string.component.scss']
})
export class TdStringComponent {
  
  public value: any;

  public setValue(val: any) {
    setTimeout(() => {
      this.value = val;
    })
  }

}
