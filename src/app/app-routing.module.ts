import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninEnseignantComponent } from './auth/signinEnseignant/signinEnseignant.component';
import { SignupEnseignantComponent } from './auth/signupEnseignant/signupEnseignant.component';
import { SignupEtudiantComponent } from './auth/signupEtudiant/signupEtudiant.component';
import { SigninEtudiantComponent } from './auth/signinEtudiant/signinEtudiant.component';

const routes: Routes = [
  { path: 'acceuil', component: AppComponent },
  { path: 'auth/signupEtudiant', component: SignupEtudiantComponent },
  { path: 'auth/signinEtudiant', component: SigninEtudiantComponent },
  { path: 'auth/signupEnseignant', component: SignupEnseignantComponent },
  { path: 'auth/signinEseignant', component: SigninEnseignantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
