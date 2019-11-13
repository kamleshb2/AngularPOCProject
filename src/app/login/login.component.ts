import { AuthGuard } from './../auth.guard';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {  Router } from '@angular/router';
import{AuthService} from '../auth.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValidUser:boolean;
  submitClicked: boolean;

  constructor(private route:Router, private svc: AuthService, private authsvc: AuthGuard) { }

  

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    this.submitClicked = false;
  }

  onSubmit(): void{
    console.log(this.loginForm.value);
    this.submitClicked = true;
    this.isValidUser = this.svc.isValid(this.loginForm.value.username, this.loginForm.value.password);
    this.svc.setLoggedIn(this.isValidUser);
    if(this.isValidUser){
      this.route.navigate(['/about']);
    }
    
    
  }



}
