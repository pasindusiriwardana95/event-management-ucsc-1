import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  constructor(public db: AngularFirestore) {}
  ngOnInit() {
  }
  pushData(email: String, password: String) {
  console.log(email + ' ' + password);
    const itemRef = this.db.collection('username').add({'a' : 1});
  }
}
