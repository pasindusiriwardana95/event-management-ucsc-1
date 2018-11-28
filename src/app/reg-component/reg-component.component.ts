import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reg-component',
  templateUrl: './reg-component.component.html',
  styleUrls: ['./reg-component.component.css']
})

export class RegComponentComponent implements OnInit {

  public societyReg: FormGroup;

  constructor(
    // public servicename: SERVICE,
    public fb: FormBuilder // Form Builder service for Reactive forms
  ) { }

  ngOnInit() {
    // this.servicename.GetSocList();
    this.societyForm();
  }

  societyForm() {
    this.societyReg = this.fb.group({
      society_name: ['', Validators.required],
      soc_username: ['', Validators.required],
      soc_password: ['', Validators.required],
      soc_description: ['', Validators.required],
      soc_venue: ['', Validators.required],
      soc_est_date: ['', Validators.required],
      soc_ic_name: ['', Validators.required],
      soc_ic_email: ['', Validators.required, Validators.email],
    });
  }


  // get date using getter

  get socName() {
    return this.societyReg.get('society_name');
  }

  get socUsername() {
    return this.societyReg.get('soc_username');
  }

  get socPassword() {
    return this.societyReg.get('soc_password');
  }

  get socDescription() {
    return this.societyReg.get('soc_description');
  }

  get socVenue() {
    return this.societyReg.get('soc_venue');
  }

  get socEstDate() {
    return this.societyReg.get('soc_est_date');
  }

  get icName() {
    return this.societyReg.get('soc_ic_name');
  }

  get icEmail() {
    return this.societyReg.get('soc_ic_email');
  }
  // Reset socity form's values
  ResetForm() {
    this.societyReg.reset();
  }
  submitSocietyData() {
    console.log(this.societyReg.value);
    // this.servicename.AddSociety(this.societyReg.value);
   // firebase.database().ref().push({'first_name': this.societyReg.value});
    this.ResetForm();  // Reset form when clicked on reset button
  }
}
