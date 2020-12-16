import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Enseignant } from '../models/enseignant';

@Injectable({
  providedIn: 'root',
})
export class EnseignantService {
  public enseignant: Enseignant;
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  AddEnseignant(enseignant) {
    return this.firestore.collection('Enseignant').add(enseignant);
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
