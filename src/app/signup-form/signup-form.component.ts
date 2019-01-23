import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UsernameValidators } from './username.validators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { cannotContainSpace } from '../shared-validation/nospace-validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  countries = [
    'India',
    'Singapore',
    'USA'
  ]
  form = new FormGroup({ 
    'fullName' : new FormControl('', cannotContainSpace),
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      cannotContainSpace
      ,UsernameValidators.shouldBeUnique
    ]),
    'password': new FormControl('', Validators.required),
    'country': new FormControl('',Validators.required),
    'gender': new FormControl('', Validators.required),
    'publicTransport': new FormControl(''),
    'privateTransport': new FormControl(''),
    'comments': new FormControl('', Validators.required)
    
    // account: new FormGroup({
    //   'username': new FormControl(''),
    //   'password': new FormControl('')
    // })
  });

  onSubmit(){
    this.form.setErrors({
      invalidLogin: true
    })
  }
  get username(){
    return this.form.get('username')
  }
}
