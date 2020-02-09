import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerCredentials: {
    email: String;
    username: String;
    password: String;
    first_name: String;
    last_name: String;
    gender: String;
    date_of_birth: Date;
    date_joined: Date
  } = {
    email: '',
    username: '',
    password:'',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: new Date('1977/04/13'),
    date_joined: new Date()
  }
  constructor(private loginService: LoginService) { }

  onRegister(){
    this.loginService.register(this.registerCredentials)
      .then(data => {
        if(data.registerErr){
          console.log(data.registerErr)
        }else{
          console.log(data)
        }
      })
  }

}
