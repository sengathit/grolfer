import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginCredentials: {username: string; password: string} = {
    username : 'biggy',
    password: 'abc123!'
  };

  constructor(private loginService: LoginService ) { }

  onLogin(){
    this.loginService.login(this.loginCredentials).then(data => {
      if(data.loginSuccess == false){
        console.log(data)
        console.log('not today ')
      }else{
        console.log(data)
        console.log('I gots this')
      }
    });
  }

}
