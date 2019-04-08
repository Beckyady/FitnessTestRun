import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import  'rxjs/add/operator/map';
import  'rxjs/add/operator/toPromise';
// import {Details} from './models/client';


@Injectable({
  providedIn: 'root'
})
export class FitnessService {
 

uri = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  addClient(fullName, email, phoneNumber, password, confirmPassword) {
    const obj = {
      fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
    confirmPassword: confirmPassword
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  }


