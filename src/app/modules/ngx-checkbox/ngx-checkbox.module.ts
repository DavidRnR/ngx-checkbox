import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCheckboxComponent } from './ngx-checkbox.component';
import { NgxCheckboxDirective } from './ngx-checkbox.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NgxCheckboxComponent,
    NgxCheckboxDirective
  ],
  declarations: [
    NgxCheckboxComponent,
    NgxCheckboxDirective]
})
export class NgxCheckboxModule { }
