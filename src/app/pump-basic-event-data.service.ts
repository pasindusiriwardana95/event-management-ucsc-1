import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PumpBasicEventDataService {
  constructor(db: AngularFirestore) { }

  getEventsOpen(): Observable<any[]> {
      return db.collection('events_pending').valueChanges();
  }
}
