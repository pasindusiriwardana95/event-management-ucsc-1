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
    // this.servicename.GetSocList();
  }
  push_reg_society(societyname, email_soc, password, dis, es_date= '', incharg, email): void {
    this.db.collection('societies').add({'society_name': societyname, 'society email': email_soc, 'dis': dis,
      'es_date': es_date, 'incharge': incharg, 'in_charg_e_mail': email});
    this.db.collection('auth_table').add({'email': email_soc, 'pasword': password, 'tag': 'soc'});
  }
}
