import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCheckboxComponent } from './ngx-checkbox.component';

describe('NgxCheckboxComponent', () => {
  let component: NgxCheckboxComponent;
  let fixture: ComponentFixture<NgxCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
