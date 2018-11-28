import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PumpFrebaseService {

  constructor(public db: AngularFirestore) { }
  push_reg_lec(): void {
   // this.db.collection('lec').add();
  }
}
