import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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

}
