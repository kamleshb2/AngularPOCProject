import { FinishComponent } from './addcustomer/finish/finish.component';
import { ProfileComponent } from './addcustomer/profile/profile.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AccountComponent } from './addcustomer/account/account.component';

export interface CanComponentDeactivate {
  canDeactivate: (nextState: import("@angular/router").RouterStateSnapshot) => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AddDeactivateService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return component.canDeactivate ? component.canDeactivate(nextState) : true;
  }

  // canDeactivate(component: AccountComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot,
  // currentState: import("@angular/router").RouterStateSnapshot, 
  // nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
  //   let urls: string[];
  //   urls = nextState.url.split('/');

  //   if ((urls.includes('profile') || urls.includes('account') || urls.includes('finish')) &&
  //   (component.accountForm.get('fname').errors || component.accountForm.get('lname').errors ||
  //   component.accountForm.get('gender').errors)) {
  //     return false;
  //   } else if ((urls.includes('profile') || urls.includes('account') || urls.includes('finish'))) {
  //     return true;
  //   }
  //   if (component.accountForm.dirty) {
  //       return confirm('Are you sure?');
  //     } else {
  //       return true;
  //     }
    
  // }


  constructor() { }
}
