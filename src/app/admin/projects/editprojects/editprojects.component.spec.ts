import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectsComponent } from './editprojects.component';

describe('EditprojectsComponent', () => {
  let component: EditprojectsComponent;
  let fixture: ComponentFixture<EditprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
