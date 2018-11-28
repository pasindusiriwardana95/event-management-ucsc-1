import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  users: Observable<any[]>;

  constructor(public db: AngularFirestore, private router: Router) {}

  ngOnInit() {
  }

  pushData(email: String, password: String) {
    console.log(email + ' ' + password);
    this.users = this.db.collection('auth_table').valueChanges();
    this.users.subscribe(res => res.forEach(x => {
      if (x.email == email.toString() && x.pasword == password.toString()) {
        if (x.tag == 'lec') {
          console.log(x.tag);
          this.router.navigate(['/test']);
        } else if (x.tag == 'soc') {
          console.log(x.tag);
          this.router.navigate(['/student-dash']);
        }
      }
    }));
  }
}
