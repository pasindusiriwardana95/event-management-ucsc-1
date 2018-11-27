import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PumpBasicEventDataService {
  private db: AngularFirestore;
  constructor() { }

  getEventsOpen(): Observable<any[]> {
      return this.db.collection('events_pending').valueChanges();
  }
}
