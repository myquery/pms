import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprocurementComponent } from './editprocurement.component';

describe('EditprocurementComponent', () => {
  let component: EditprocurementComponent;
  let fixture: ComponentFixture<EditprocurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprocurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprocurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
