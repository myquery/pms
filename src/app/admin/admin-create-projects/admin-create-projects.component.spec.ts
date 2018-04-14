import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateProjectsComponent } from './admin-create-projects.component';

describe('AdminCreateProjectsComponent', () => {
  let component: AdminCreateProjectsComponent;
  let fixture: ComponentFixture<AdminCreateProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
