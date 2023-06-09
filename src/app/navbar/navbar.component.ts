import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginAuthGuard } from '../guards/login-auth.guard';
import { LoginService } from '../services/login.service';
import { TodosService } from '../services/todos.service';
import { TodoComponent } from '../todo/todo.component';

type userType ={
  email: string|undefined|null,
  password: string|undefined|null
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

constructor(private _service: LoginService, private _authGuard: LoginAuthGuard, private loginGuard:LoginAuthGuard, private appComp: AppComponent){}

userEmail: any = this._service.email

  ngOnInit(): void {

    this._service.pushUserData()

  }
  reloadPage(){

    this.appComp.logOut()
    this._authGuard.logOut()
    window.location.reload()
    
  }

}
