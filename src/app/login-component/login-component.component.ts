import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginform: FormGroup;

  constructor(

    // public servicename: SERVICE,
    public fb: FormBuilder // Form Builder service for Reactive forms

  ) { }

  ngOnInit() {
    // this.servicename.GetSocList();
    this.loginForm();
  }

  loginForm(){
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginform.get('username');
  }

  get password() {
    return this.loginform.get('password');
  }

  // Reset socity form's values
  ResetForm() {
    this.loginform.reset();
  } 

  login() {
    console.log(this.loginform.value);
    // this.servicename.AddSociety(this.lecturerReg.value);
    this.ResetForm();  // Reset form when clicked on reset button
  };
}
