import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninEnseignantComponent } from './signinEnseignant.component';

describe('SigninEnseignantComponent', () => {
  let component: SigninEnseignantComponent;
  let fixture: ComponentFixture<SigninEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
