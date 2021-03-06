import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiant: Etudiant
  constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth) { }


  AddStudent(etudiant: Etudiant) {
    
    return this.firestore.collection('universite-en-ligne').add(etudiant);}
    
  
  

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(this.etudiant.pseudo, this.etudiant.password);
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(this.etudiant.email);
  }
}
