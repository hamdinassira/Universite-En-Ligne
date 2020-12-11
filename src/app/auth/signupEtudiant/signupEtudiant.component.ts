import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { EtudiantService } from 'src/app/shared/services/etudiant.service';


@Component({
  selector: 'app-signupEtudiant',
  templateUrl: './signupEtudiant.component.html',
  styleUrls: ['./signupEtudiant.component.css']
})
export class SignupEtudiantComponent implements OnInit {
  @ViewChild('addForm')
   addForm: NgForm;
   cin: NgModel;
  public etudiant = new Etudiant();
  etudiants: Etudiant
  constructor(public etudiantService: EtudiantService) { }

  ngOnInit(): void {
  }
  save(){
   
    
      this.etudiantService.AddStudent({ ...this.etudiant }).then((res) => {
       this.resetUserForm();
        //this.toastr.success('', 'étudiant ajouté avec succés');
      })
    
  }
 
    resetUserForm(){
      this.addForm.resetForm();
    }

}
