import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';

@Component({
  selector: 'app-signinEnseignant',
  templateUrl: './signinEnseignant.component.html',
  styleUrls: ['./signinEnseignant.component.css']
})
export class SigninEnseignantComponent implements OnInit {

  
  enseignant : Enseignant;
  signinForm: FormGroup;

  constructor(    public router: Router,
    public authService: EnseignantService,
    //private toastr: ToastrService
) { }

  ngOnInit(): void {
  }

login() {
    this.authService
      .signIn(this.enseignant.pseudo, this.enseignant.password)
      .then((result) => {
        this.router.navigate(['/EspaceEnseignant']);
        window.localStorage.set('user', result.user.email)
        //this.toastr.error('success!', "Login success");

      })

      .catch((erreur) => {
        console.log(erreur);
        //this.toastr.error('Error!', erreur.message);
      });
  }

  resetPwd() {
    this.authService.resetPassword(this.enseignant.email).then(() => {
      alert('check you email');
    });
  }
}
