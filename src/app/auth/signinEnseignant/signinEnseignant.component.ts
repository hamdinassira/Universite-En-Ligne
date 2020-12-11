import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';

@Component({
  selector: 'app-signinEnseignant',
  templateUrl: './signinEnseignant.component.html',
  styleUrls: ['./signinEnseignant.component.css']
})
export class SigninEnseignantComponent implements OnInit {

  email: string;
  password: string;

  constructor(    public router: Router,
    public authService: EnseignantService,
    //private toastr: ToastrService
) { }

  ngOnInit(): void {
  }

  /*login() {
    this.authService
      .signIn(this.email, this.password)
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
*/
  /*resetPwd() {
    this.authService.resetPassword(this.email).then(() => {
      alert('check you email');
    });
  }*/
}
