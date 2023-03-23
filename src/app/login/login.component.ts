import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginAuthGuard } from '../guards/login-auth.guard';
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

  constructor(private _loginService:LoginService, private _router: Router, private loginGuard:LoginAuthGuard, private logginSwitch: AppComponent){}

  loginForm= new FormGroup({
    email :new FormControl(''),
    password :new FormControl(''),

  })

  loginUser(){
    this._loginService.email =  this.loginForm.value.email;
    this._loginService.password =  this.loginForm.value.password;
    this._loginService.clgValues();

    this.logginSwitch.loggedIn()

    this._router.navigate(['/'])

  }
}
