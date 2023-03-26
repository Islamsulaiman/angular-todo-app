import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from '../app.component';
import { LoginAuthGuard } from '../guards/login-auth.guard';
import { LoginService } from '../services/login.service';


type user = {
  name:string|undefined,
  email: string|undefined,
  password: string|undefined
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private _loginService:LoginService, private _router: Router, private loginGuard:LoginAuthGuard, private logginSwitch: AppComponent){}

  loginForm= new FormGroup({
    email :new FormControl('', Validators.required),
    password :new FormControl('', Validators.required),

  })

  loginUser(){
    this._loginService.email =  this.loginForm.value.email;
    this._loginService.password =  this.loginForm.value.password;
    this._loginService.clgValues();

    if(!this.loginForm.value.email || ! this.loginForm.value.password){
      alert('Please enter the form data')
    }else{
      this.logginSwitch.loggedIn()
      this._router.navigate(['/todos'])
    }


  }
}
