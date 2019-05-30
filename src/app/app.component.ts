import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NgxCheckboxComponent } from './modules/ngx-checkbox/ngx-checkbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage = false;

  @ViewChild('myCheckbox', { static: false }) myCB: NgxCheckboxComponent;

  @ViewChildren('myMultiCheckbox') myMultiCB: QueryList<NgxCheckboxComponent>;

  onShowMessage(event) {
    this.showMessage = !this.showMessage;
  }

  onSetCheckBox() {
    // Set 'checked' or 'no-checked'
    this.myCB.setClick('checked');
  }

  onSetMultiCheckBox() {
    // Set 'checked' or 'no-checked'
    this.myMultiCB.forEach((cb: NgxCheckboxComponent) => {
      cb.setClick('no-checked');
    });
  }
}
