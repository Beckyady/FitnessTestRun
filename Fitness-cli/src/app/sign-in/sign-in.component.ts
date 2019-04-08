import { Component,ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormArray } from "@angular/forms";
import {Validators } from "@angular/forms";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  
})
export class SignInComponent implements OnInit {
  logInForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.logInForm = this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email]],
       
          password: ['', [Validators.required, Validators.minLength(6)]],
        
      }
      );
  }

  // convenience getter for easy access to form fields
  get f() { return this.logInForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.logInForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.logInForm.value))
  }

  

}