import { Component, OnInit } from '@angular/core';
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




constructor(private _service: LoginService){



}

userEmail: any = this._service.email

  ngOnInit(): void {

    this._service.pushUserData()

  }

  reloadPage(){
    window.location.reload()
  }

}
