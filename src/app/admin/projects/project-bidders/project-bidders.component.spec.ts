import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBiddersComponent } from './project-bidders.component';

describe('ProjectBiddersComponent', () => {
  let component: ProjectBiddersComponent;
  let fixture: ComponentFixture<ProjectBiddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBiddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
