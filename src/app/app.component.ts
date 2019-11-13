import { AuthGuard } from './auth.guard';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerOrderApplication';
  loggedInStatus: any;
  message: string;

  constructor(private svc: AuthService, private router:Router, private authsvc: AuthGuard){

    // this.svc.getLoggedInStatus().subscribe(data=> {
    //   this.loggedInStatus = data;
    // });

  }



  logout(){
    this.svc.logout();
    this.loggedInStatus = this.svc.getLoggedIn();
    this.router.navigate(['/login']);

  }

}
