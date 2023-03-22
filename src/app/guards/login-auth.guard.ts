import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginAuthGuard implements CanActivate {
  isLogged: boolean = true;
  
  constructor(private _router: Router){

  }

  youAreLoggedIn(){
    alert("you are logged in, go to main page")
    this._router.navigate(['/'])
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any| Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLogged ? this.youAreLoggedIn() : true;
  }
  

}
