import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedInStatus:boolean = false;

  constructor() { }

  isValid(username: string, password: string){

    if(username == 'admin' && password == 'admin'){
      return true;
    }

    return false;
  }

  setLoggedIn(isValidUser : boolean){
    
    sessionStorage.setItem("loggedInStatus",isValidUser.toString());
    this.loggedInStatus = true;
  }

  getLoggedIn(){
    return JSON.parse(sessionStorage.getItem("loggedInStatus"));
  }

  logout(){
    sessionStorage.setItem("loggedInStatus", false.toString());
    this.loggedInStatus = false;
  }
}
