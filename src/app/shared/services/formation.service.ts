import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  formation: Formation
  constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth) { }


  AddFormation(formation: Formation) {
      
    return this.firestore.collection('Formation').add(formation);
  }
  
  }
  

  

