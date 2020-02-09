import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  localLoginUrl: string = 'http://localhost:8080/';
  devLoginUrl: string = 'https://grolfer-api.herokuapp.com/login';
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient) { }

  login(loginCredentials){

    let promise = this.http.post(this.localLoginUrl + 'login',loginCredentials,{withCredentials: true})
      .toPromise()
      .then(res => {
          return res
        },msg => {
          return msg
        });

    return promise;
  }

  register(registerCredentials){
    let promise = this.http.post(this.localLoginUrl + 'register',registerCredentials)
      .toPromise()
      .then(res => {
        return res
      },msg => {
        return msg
      }) 

      return promise
    }
}
