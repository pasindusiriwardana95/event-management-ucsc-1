import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-reg-component',
  templateUrl: './reg-component.component.html',
  styleUrls: ['./reg-component.component.css']
})

export class RegComponentComponent implements OnInit {

  public societyReg: FormGroup;

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }
  
  push_reg_society(societyname, username, password, cpassword, dis, es_date= '', incharg, email): void {
    if(password === cpassword){
    this.db.collection('societies').add({'society_name': societyname, 'username': username, 'dis': dis,
      'es_date': es_date, 'incharge': incharg, 'in_charg_e_mail': email});
    this.db.collection('auth_table').add({'user_name': username, 'society_name': societyname, 'pasword': password, 'tag': 'soc'});
    } else{
      console.log("Password mismatch");
      alert("Password mismatch");
    }
  }
}
