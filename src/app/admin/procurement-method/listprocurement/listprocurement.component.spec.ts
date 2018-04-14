import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprocurementComponent } from './listprocurement.component';

describe('ListprocurementComponent', () => {
  let component: ListprocurementComponent;
  let fixture: ComponentFixture<ListprocurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprocurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprocurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
