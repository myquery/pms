import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeloginHeaderComponent } from './ndelogin-header.component';

describe('NdeloginHeaderComponent', () => {
  let component: NdeloginHeaderComponent;
  let fixture: ComponentFixture<NdeloginHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdeloginHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdeloginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
