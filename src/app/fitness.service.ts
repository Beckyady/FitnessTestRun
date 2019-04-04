import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  uri = 'http://localhost:4000/sign-up';

  constructor(private http: HttpClient) { }

  addDetails(fullName, email, phoneNumber, password, confirmPassword) {
    const obj = {
      fullName:  fullName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
    confirmPassword:  confirmPassword
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}

