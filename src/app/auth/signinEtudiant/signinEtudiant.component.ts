import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { EtudiantService } from 'src/app/shared/services/etudiant.service';

@Component({
  selector: 'app-signinEtudiant',
  templateUrl: './signinEtudiant.component.html',
  styleUrls: ['./signinEtudiant.component.css']
})
export class SigninEtudiantComponent implements OnInit {

  email: string;
  password: string;
  public etudiant=new Etudiant();

  constructor(    public router: Router,
    private authService: EtudiantService,
    //private toastr: ToastrService
) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.signIn(this.etudiant.email, this.etudiant.password)
      .then((result) => {
        this.router.navigate(['/']);
        window.localStorage.set('user', result.user.email)
        //this.toastr.error('success!', "Login success");

      })

      .catch((erreur) => {
        console.log(erreur);
        //this.toastr.error('Error!', erreur.message);
      });
  }

  resetPwd() {
    this.authService.resetPassword(this.email).then(() => {
      alert('check you email');
    });
  }
}
