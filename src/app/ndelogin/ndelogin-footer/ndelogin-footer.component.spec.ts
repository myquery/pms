import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeloginFooterComponent } from './ndelogin-footer.component';

describe('NdeloginFooterComponent', () => {
  let component: NdeloginFooterComponent;
  let fixture: ComponentFixture<NdeloginFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdeloginFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdeloginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
