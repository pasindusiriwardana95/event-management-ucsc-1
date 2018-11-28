import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-student-form-component',
  templateUrl: './student-form-component.component.html',
  styleUrls: ['./student-form-component.component.css']
})
export class StudentFormComponentComponent implements OnInit {

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }
submit_data(event_name, dis, venue, date, res, ic_name, ic_email, vol): void {
    console.log(' hello ');
  this.db.collection( 'events' ).add({
'event_name': event_name,
  'dis': dis,
  'venue': venue,
  'data': date,
  'res': res,
  'incharge': ic_name,
  'incharge_email': ic_email,
  'volunteers': vol
});
}
}
