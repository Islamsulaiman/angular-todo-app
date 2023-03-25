import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


type user ={
  email: string|undefined|null,
  password: string|undefined|null
}


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  startper:number = 50

  email: string|undefined|null = ""
  password : string|undefined|null=""

  //create observable to check for created todo's
  private percentageSource = new BehaviorSubject(this.startper);
  percentage = this.percentageSource.asObservable();

  //observable to send user data
  private userDataSource = new BehaviorSubject(this.email);
  userData = this.userDataSource.asObservable();

          

  phone:any=0

  constructor() { }

  pushUserData(){
    this.userDataSource.next(this.email)
  }



  clgValues(){
    // console.log(` email = ${this.email} , password = ${this.password}`)
  }
}
