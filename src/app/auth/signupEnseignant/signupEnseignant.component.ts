import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';

@Component({
  selector: 'app-signupEnseignant',
  templateUrl: './signupEnseignant.component.html',
  styleUrls: ['./signupEnseignant.component.css']
})
export class SignupEnseignantComponent implements OnInit {
  public enseignant=new Enseignant();
  @ViewChild('addForm')
  addForm: NgForm;
 
  enseignant1: Enseignant
 constructor(public ensignantService: EnseignantService) { }

 ngOnInit(): void {
 }
 save(){
   
     this.ensignantService.AddEnseignant({ ...this.enseignant }).then((res) => {
      this.resetUserForm();
       
     })
   
 }

   resetUserForm(){

     this.addForm.resetForm();
   }

}
