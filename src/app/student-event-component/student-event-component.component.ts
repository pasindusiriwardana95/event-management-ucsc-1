import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-event-component',
  templateUrl: './student-event-component.component.html',
  styleUrls: ['./student-event-component.component.css']
})
export class StudentEventComponentComponent implements OnInit {

  eventCards: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.eventCards = db.collection('events_pending').valueChanges();
  }
  ngOnInit() {
  }

}
