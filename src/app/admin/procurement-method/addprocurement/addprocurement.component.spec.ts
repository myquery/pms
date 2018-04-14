import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprocurementComponent } from './addprocurement.component';

describe('AddprocurementComponent', () => {
  let component: AddprocurementComponent;
  let fixture: ComponentFixture<AddprocurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprocurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprocurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
