import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  login_form_one = new FormGroup({
    username: new FormControl(),
    password: new FormControl
  });
  constructor() { }
  ngOnInit() {
  }
}
