import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url = 'https://grolfer-api.herokuapp.com/posts';
  demo:any = {
    username: null,
    password: null
  };

  users: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  loginCredential:any = {
    username : 'sample@gmail.com', 
    password : ''
  }

  // login(){
  //   this.http.get(this.url).subscribe((data: any) => {
  //     this.demo = data
  //   })
  // }

  login(){
    this.http.get(
      this.url
    ).subscribe(data => {
      this.demo.username = true
      this.users = data
    },
    error => console.log(error))  
  }

}
