import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgxCheckboxDirective } from './ngx-checkbox.directive';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: './ngx-checkbox.component.html',
  styleUrls: ['./ngx-checkbox.component.css']
})
export class NgxCheckboxComponent {

  @Input() isChecked!: boolean;
  @Input() iconClass!: string;
  @Input() checkedClass!: string;
  @Input() nocheckedClass!: string;
  @Input() focusClass!: string;
  @Input() size = 16;
  @Input() tabIndex!: number;
  @Input() id!: number | string;

  @Output() isClicked = new EventEmitter();

  @ViewChild(NgxCheckboxDirective) element: any;

  constructor() { }

  /**
   * Emit Click
   */
  onActionClick(event: MouseEvent) {
    this.isClicked.emit(event);
  }

  /**
   * Emit Key Space pressed
   * @param event 
   */
  onKeyPress(event: KeyboardEvent) {
    // If key is Space
    if (event.code === 'Space') {
      this.isClicked.emit(event);
    }

  }

  /**
   * Set Status of the Checkbox. 
   * @param status 
   */
  setClick(status: boolean) {
    // Call Directive and do the action
    this.element.setCheckbox(status);
  }

  setFocusClass() {

    // Set/Remove Focus Class
    this.element.setFocusClass(this.focusClass);

  }

}
