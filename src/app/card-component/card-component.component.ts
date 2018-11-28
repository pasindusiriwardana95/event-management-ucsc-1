import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})

export class CardComponentComponent implements OnInit {
  cards:  Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.cards = db.collection('events_pending').valueChanges();
  }
  ngOnInit() {
  }
}
