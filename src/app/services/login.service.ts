import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  startper:number = 50

  //create observable to check for created todo's
  private percentageSource = new BehaviorSubject(this.startper);
  percentage = this.percentageSource.asObservable();

  username:any=""
  password:any=""
  email:any=""
  phone:any=0

  constructor() { }

  pushObservable(){
    this.percentageSource.next(this.startper++)
  }



  clgValues(){
    console.log(`user = ${this.username}, email = ${this.email} , password = ${this.password}, phone number = ${this.phone}`)
  }
}
