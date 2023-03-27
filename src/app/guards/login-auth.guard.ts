import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginAuthGuard implements CanActivate {
  isLogged: boolean = false;
  
  constructor(private _router: Router){}

  private loggedInSource = new BehaviorSubject(this.isLogged);
  loggedIn = this.loggedInSource.asObservable();

  loggedInSwitch(){
    this.isLogged = true;
    console.log(this.isLogged)
  }

  logOut(){
    this.isLogged = false
    console.log(this.isLogged)
  }

  areWeLoggedIn(){
    return this.isLogged
    
  }

  youAreLoggedIn(){
    alert("you are logged in, redirecting to main page")
    this._router.navigate(['/'])
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any| Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLogged ?  true  : this._router.navigate(['/login']) ;
  }
}
