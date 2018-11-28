import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PumpFrebaseService} from '../pump-frebase.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-reg-component-lec',
  templateUrl: './reg-component-lec.component.html',
  styleUrls: ['./reg-component-lec.component.css']
})
export class RegComponentLecComponent implements OnInit {

  public lecturerReg: FormGroup;

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
    // this.servicename.GetSocList();
  }
  push_reg_lec(firstname, lastname, password, cpassword, email , username, dis): void {
    if(password === cpassword){
    this.db.collection('lectures').add({'user_name': username, 'firstname': firstname, 'lastname': lastname,
      'email': email, 'dis': dis});
    this.db.collection('auth_table').add({'user_name': username, 'email': email, 'pasword': password, 'tag': 'lec'});
    } else{
      console.log("Password mismatch");
      alert("Password mismatch");
    }
  }
}
