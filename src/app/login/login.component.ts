import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';


type user = {
  name:string,
  email: string,
  password: string
  
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor(private _loginService:LoginService){

  }


  loginForm= new FormGroup({
    userName :new FormControl(''),
    email :new FormControl(''),
    password :new FormControl(''),

  })

  loginUser(){
    this._loginService.email =  this.loginForm.value.email;
    this._loginService.password =  this.loginForm.value.password;
    this._loginService.username =  this.loginForm.value.userName;

    this._loginService.clgValues();
  }
  
}
