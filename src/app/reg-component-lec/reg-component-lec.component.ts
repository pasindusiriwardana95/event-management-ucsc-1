import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-component-lec',
  templateUrl: './reg-component-lec.component.html',
  styleUrls: ['./reg-component-lec.component.css']
})
export class RegComponentLecComponent implements OnInit {

  public lecturerReg: FormGroup;

  constructor(
    // public servicename: SERVICE,
    public fb: FormBuilder // Form Builder service for Reactive forms

  ) { }

  ngOnInit() {
    // this.servicename.GetSocList();
    this.lecturerForm();
  }

  lecturerForm(){
    this.lecturerReg = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      description: ['']
    });
  }

  get firstname() {
    return this.lecturerReg.get('firstname');
  }

  get lastname() {
    return this.lecturerReg.get('lastname');
  }

  get username() {
    return this.lecturerReg.get('username');
  }

  get password() {
    return this.lecturerReg.get('password');
  }

  get cpassword() {
    return this.lecturerReg.get('cpassword');
  }

  get email() {
    return this.lecturerReg.get('email');
  }

  get description() {
    return this.lecturerReg.get('description');
  }

  

  // Reset socity form's values
  ResetForm() {
    this.lecturerReg.reset();
  } 

  submitLecturerData() {
    console.log(this.lecturerReg.value);
    // this.servicename.AddSociety(this.lecturerReg.value);
    this.ResetForm();  // Reset form when clicked on reset button
  };

}
