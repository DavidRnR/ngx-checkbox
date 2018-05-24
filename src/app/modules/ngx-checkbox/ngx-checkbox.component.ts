import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgxCheckboxDirective } from './ngx-checkbox.directive';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: './ngx-checkbox.component.html',
  styleUrls: ['./ngx-checkbox.component.css']
})
export class NgxCheckboxComponent {

  @Input() isChecked: boolean;
  @Input() iconClass: string;
  @Input() checkedClass: string;
  @Input() nocheckedClass: string;
  @Input() size: number = 16;

  @Output() isClicked = new EventEmitter();

  @ViewChild(NgxCheckboxDirective) element;

  constructor() { }

  /**
   * Emit Click
   */
  onActionClick(event) {
    this.isClicked.emit(event);
  }

  /**
   * Set Status of the Checkbox. 
   * status values: 'checked' or 'no-checked'
   * @param status 
   */
  setClick(status: string) {

    // Call Directive and do the action
    this.element.setCheckbox(status);
  }
}
