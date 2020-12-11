import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEnseignantComponent } from './signupEnseignant.component';

describe('SignupEnseignantComponent', () => {
  let component: SignupEnseignantComponent;
  let fixture: ComponentFixture<SignupEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
