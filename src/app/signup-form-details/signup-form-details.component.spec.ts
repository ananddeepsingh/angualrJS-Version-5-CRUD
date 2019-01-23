import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormDetailsComponent } from './signup-form-details.component';

describe('SignupFormDetailsComponent', () => {
  let component: SignupFormDetailsComponent;
  let fixture: ComponentFixture<SignupFormDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
