import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectGroupComponent } from './create-project-group.component';

describe('CreateProjectGroupComponent', () => {
  let component: CreateProjectGroupComponent;
  let fixture: ComponentFixture<CreateProjectGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
