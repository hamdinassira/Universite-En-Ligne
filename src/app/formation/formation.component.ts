import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from '../shared/models/formation';
import { FormationService } from '../shared/services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  @ViewChild('addForm')
   addForm: NgForm;
  public formation = new Formation;
  formations: Formation
  constructor(public formationService: FormationService) { }

  ngOnInit(): void {
  }

  save(){
   
    
      this.formationService.AddFormation({ ...this.formation }).then((res) => {
       this.resetUserForm();
        
      })
    
  }
 
    resetUserForm(){
      this.addForm.resetForm();
    }

}
