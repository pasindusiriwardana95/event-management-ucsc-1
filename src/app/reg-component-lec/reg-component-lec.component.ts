import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-reg-component-lec',
  templateUrl: './reg-component-lec.component.html',
  styleUrls: ['./reg-component-lec.component.css']
})
export class RegComponentLecComponent implements OnInit {

  public lecturerReg: FormGroup;

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

}
