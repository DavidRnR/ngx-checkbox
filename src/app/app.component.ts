import { Component, ViewChild } from '@angular/core';
import { NgxCheckboxComponent } from './modules/ngx-checkbox/ngx-checkbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage: boolean = false;

  @ViewChild('myCheckbox') myCB: NgxCheckboxComponent;
  
  onShowMessage(event) {
    this.showMessage = !this.showMessage;
  }

  onSetCheckBox() {
    // Set 'checked' or 'no-checked'
    this.myCB.setClick('checked');
  }
}
