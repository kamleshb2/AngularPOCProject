import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  message: string;

  constructor(private auth:AuthService, private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.getLoggedIn())
    {
      this.message = undefined;
      return true;
    }
    else {
      
      this.message = 'please login first';
      this.route.navigate(['login']);
    }
  }

  getMessage(){
    return this.message;
  }
  
}
