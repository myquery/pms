import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConsultantsComponent } from './project-consultants.component';

describe('ProjectConsultantsComponent', () => {
  let component: ProjectConsultantsComponent;
  let fixture: ComponentFixture<ProjectConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
