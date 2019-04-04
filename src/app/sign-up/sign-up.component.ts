import { Component,ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormArray } from "@angular/forms";
import { MustMatch } from "../must-match/validate-password";
import {Validators } from "@angular/forms";
import { FitnessService } from '../fitness.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
 
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private fs: FitnessService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          fullName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phoneNumber:['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  addDetails(fullName, email, phoneNumber, password, confirmPassword){
this.fs.addDetails(fullName, email, phoneNumber, password, confirmPassword);
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  

}


