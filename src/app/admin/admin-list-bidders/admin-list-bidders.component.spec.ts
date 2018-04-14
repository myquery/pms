import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListBiddersComponent } from './admin-list-bidders.component';

describe('AdminListBiddersComponent', () => {
  let component: AdminListBiddersComponent;
  let fixture: ComponentFixture<AdminListBiddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListBiddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
