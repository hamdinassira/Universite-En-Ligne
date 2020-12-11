import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from'@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { SigninEnseignantComponent } from './auth/signinEnseignant/signinEnseignant.component';
import { SigninEtudiantComponent } from './auth/signinEtudiant/signinEtudiant.component';
import { SignupEnseignantComponent } from './auth/signupEnseignant/signupEnseignant.component';
import { SignupEtudiantComponent } from './auth/signupEtudiant/signupEtudiant.component';
//import { ToastrService } from 'ngx-toastr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormationComponent } from './formation/formation.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninEtudiantComponent,
    SignupEtudiantComponent,
    SigninEnseignantComponent,
    SignupEnseignantComponent,
    FormationComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
