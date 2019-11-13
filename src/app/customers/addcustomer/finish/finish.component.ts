import { CanComponentDeactivate } from './../../add-deactivate.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';



@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit, CanComponentDeactivate {

  private email: FormControl;
  private nextClicked = false;

  constructor(private csvc: CustomerService, private router: Router, private msvc: MessageService) { }

  ngOnInit() {
    this.email = new FormControl(this.csvc.email, [Validators.required, Validators.email]);
  }

  next() {
    this.csvc.email = this.email.value;
    this.nextClicked = true;
    if (!this.email.errors) {
      this.csvc.AddCustomersAsync().subscribe(data => {
        console.log(data);
        this.csvc.fname = null;
        this.csvc.lname = null;
        this.csvc.gender = null;
        this.csvc.address = '';
        this.csvc.city = '';
        this.csvc.state = '';
        this.csvc.email = null;
      });
      console.log('here');

      this.msvc.add({severity: 'success', summary:'Success Message', detail: 'Customer Added'});
      console.log('added');
      setTimeout( () => {
        this.router.navigate(['/customer-list']);
      }, 2000);
    }

  }

  previous() {
    this.nextClicked = true;
    this.csvc.email = this.email.value;
    this.router.navigate(['/customer-list/addcustomer/profile'])
  }

  canDeactivate(nextState: import("@angular/router").RouterStateSnapshot): boolean {

     let urls: string[];
     urls = nextState.url.split('/');

     if ((urls.includes('profile') || urls.includes('account') || urls.includes('finish')) && !this.nextClicked) {
        return false;
      }
     if (!this.nextClicked) {
        return confirm('Are you sure?');
      } else {
        return true;
      }

}

}
