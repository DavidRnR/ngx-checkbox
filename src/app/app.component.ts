import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgxCheckboxComponent } from 'projects/ngx-checkbox/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage = false;
  clicked = false;
  @ViewChild('myCheckbox') myCB!: NgxCheckboxComponent;
  
  @ViewChildren('myMultiCheckbox') myMultiCB!: QueryList<NgxCheckboxComponent>;
  
  onShowMessage(event: MouseEvent) {
    this.showMessage = !this.showMessage;
  }

  onSetCheckBox() {
    // Set 'checked' or 'no-checked'
    this.clicked = !this.clicked;
  }

  onSetMultiCheckBox() {
    // Set 'checked' or 'no-checked'
    this.myMultiCB.forEach((cb: NgxCheckboxComponent) => {
      cb.setClick(false);
    });
  }
}
