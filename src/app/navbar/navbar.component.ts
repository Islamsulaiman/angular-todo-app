import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

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




constructor(private _service: LoginService){}

userEmail: any = this._service.email



  ngOnInit(): void {

    this._service.pushUserData()

    // this.userEmail =  this._service.userData.subscribe(userEmail => this.userEmail = JSON.stringify (userEmail)) 
    console.log(this.userEmail)
  }

  reloadPage(){
    window.location.reload()
  }


}
