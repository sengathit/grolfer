import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginCredential = {
    username : '',
    password : ''
  }

  login(){
    console.log(this.loginCredential.username,this.loginCredential.password);
  }

}
