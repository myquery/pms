import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeloginLandingComponent } from './ndelogin-landing.component';

describe('NdeloginLandingComponent', () => {
  let component: NdeloginLandingComponent;
  let fixture: ComponentFixture<NdeloginLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdeloginLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdeloginLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
