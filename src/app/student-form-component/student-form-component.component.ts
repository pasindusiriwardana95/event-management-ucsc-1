import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form-component',
  templateUrl: './student-form-component.component.html',
  styleUrls: ['./student-form-component.component.css']
})
export class StudentFormComponentComponent implements OnInit {

  eventCreateForm: FormGroup;

  constructor(

    // public servicename: SERVICE,
    public fb: FormBuilder // Form Builder service for Reactive forms

  ) { }

  ngOnInit() {
    // this.servicename.GetSocList();
    this.societyEventForm();
  }

  societyEventForm(){
    this.eventCreateForm = this.fb.group({
      eventname: ['', Validators.required],
      description: ['', Validators.required],
      venue: ['', Validators.required],
      date: ['', Validators.required],
      resources: [''],
      nameofic: ['', Validators.required],
      mailofic: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    })
  }

  // get date using getter

  get eventname() {
    return this.eventCreateForm.get('eventname');
  }

  get description() {
    return this.eventCreateForm.get('description');
  }

  get venue() {
    return this.eventCreateForm.get('venue');
  }

  get evntDate() {
    return this.eventCreateForm.get('date');
  }

  get resources() {
    return this.eventCreateForm.get('resources');
  }

  get icName() {
    return this.eventCreateForm.get('nameofic');
  }

  get icEmail() {
    return this.eventCreateForm.get('mailofic');
  }

  // Reset socity form's values
  ResetForm() {
    this.eventCreateForm.reset();
  } 

  submitEventCard() {
    console.log(this.eventCreateForm.value);
    // this.servicename.AddSociety(this.eventCreateForm.value);
    this.ResetForm();  // Reset form when clicked on reset button
  };

}
