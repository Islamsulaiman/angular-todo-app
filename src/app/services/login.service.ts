import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  username:any=""
  password:any=""
  email:any=""

  clgValues(){
    console.log(`user = ${this.username}, email = ${this.email} , password = ${this.password}`)
  }
}
