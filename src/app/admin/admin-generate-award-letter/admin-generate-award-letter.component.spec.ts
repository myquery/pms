import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateAwardLetterComponent } from './admin-generate-award-letter.component';

describe('AdminGenerateAwardLetterComponent', () => {
  let component: AdminGenerateAwardLetterComponent;
  let fixture: ComponentFixture<AdminGenerateAwardLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerateAwardLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerateAwardLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
