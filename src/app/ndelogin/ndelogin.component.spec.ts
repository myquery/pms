import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeloginComponent } from './ndelogin.component';

describe('NdeloginComponent', () => {
  let component: NdeloginComponent;
  let fixture: ComponentFixture<NdeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
