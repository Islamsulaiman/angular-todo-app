import { Component, OnInit } from '@angular/core';
import { LoginAuthGuard } from './guards/login-auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private _loginGuard: LoginAuthGuard){

  }
  isLogged = this._loginGuard.isLogged

  ngOnInit(): void {

  }
  title = 'angular-app';

}
