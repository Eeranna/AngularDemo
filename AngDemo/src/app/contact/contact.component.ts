import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onFormSubmitDemo(userFormDemo: NgForm) {
    console.log('Name:' + userFormDemo.controls['message'].value);
  }
  onFormSubmit(userForm: NgForm) {
    // console.log(userForm.value);
    console.log('Name: ' + userForm.controls['name'].value);
    console.log('City: ' + userForm.controls['city'].value);
    console.log('State: ' + userForm.controls['state'].value);
    console.log('Form Valid: ' + userForm.valid);
    console.log('Form Submitted: ' + userForm.submitted);
  }
  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }

}
