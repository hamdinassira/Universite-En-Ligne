import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninEnseignantComponent } from './auth/signinEnseignant/signinEnseignant.component';
import { SignupEnseignantComponent } from './auth/signupEnseignant/signupEnseignant.component';
import { SignupEtudiantComponent } from './auth/signupEtudiant/signupEtudiant.component';
import { SigninEtudiantComponent } from './auth/signinEtudiant/signinEtudiant.component';
import { EspaceEnseignantComponent } from './registre/espace-enseignant/espace-enseignant.component';
import { MasterComponent } from './formation/master/master.component';
import { LicenceComponent } from './formation/licence/licence.component';
import { CertificationComponent } from './formation/certification/certification.component';
import { FormationComponent } from './formation/formation/formation.component';

const routes: Routes = [
  { path: 'acceuil', component: AppComponent },
  { path: 'auth/signupEtudiant', component: SignupEtudiantComponent },
  { path: 'auth/signinEtudiant', component: SigninEtudiantComponent },
  { path: 'auth/signupEnseignant', component: SignupEnseignantComponent },
  { path: 'auth/signinEnseignant', component: SigninEnseignantComponent },
  { path: 'EspaceEnseignant', component:  EspaceEnseignantComponent},
  { path: 'ListeMaster', component:  MasterComponent},
  { path: 'ListeLicence', component:  LicenceComponent},
  { path: 'ListeFormation', component:  FormationComponent},
  { path: 'ListeCertif', component:  CertificationComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
