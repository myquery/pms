import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListBiddersDetailComponent } from './admin-list-bidders-detail.component';

describe('AdminListBiddersDetailComponent', () => {
  let component: AdminListBiddersDetailComponent;
  let fixture: ComponentFixture<AdminListBiddersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListBiddersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListBiddersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
