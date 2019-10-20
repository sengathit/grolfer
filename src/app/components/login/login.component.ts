import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url = 'http://grolfer-api.herokuapp.com/';
  demo:any = {
    username: null,
    password: null
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  loginCredential = {
    username : '',
    password : ''
  }

  // login(){
  //   
  // }

  login(){
    this.http.post(this.url,this.loginCredential).subscribe((data: any) => {
      this.demo = data
    })
  }

}
