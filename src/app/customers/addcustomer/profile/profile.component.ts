import { CanComponentDeactivate } from './../../add-deactivate.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, CanComponentDeactivate {

  private profileForm: FormGroup;
  private nextClicked = false;

  constructor(private router: Router, private csvc: CustomerService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      address: new FormControl(this.csvc.address),
      city: new FormControl(this.csvc.city),
      state: new FormControl(this.csvc.state)
    });


  }

  previous() {
    this.csvc.address = this.profileForm.get('address').value;
    this.csvc.city = this.profileForm.get('city').value;
    this.csvc.state = this.profileForm.get('state').value;
    this.nextClicked = true;
    this.router.navigate(['/customer-list/addcustomer/account']);
  }

  next() {
    this.csvc.address = this.profileForm.get('address').value;
    this.csvc.city = this.profileForm.get('city').value;
    this.csvc.state = this.profileForm.get('state').value;
    this.nextClicked = true;
    this.router.navigate(['/customer-list/addcustomer/finish']);
  }

  canDeactivate(nextState: import("@angular/router").RouterStateSnapshot): boolean {

    console.log('Hello');
    let urls: string[];
    urls = nextState.url.split('/');

    if ((urls.includes('profile') || urls.includes('account') || urls.includes('finish')) && !this.nextClicked) {
      return false;
    } else if ((urls.includes('profile') || urls.includes('account') || urls.includes('finish'))) {
      return true;
    }
    if (confirm('Are you sure?')) {
      this.csvc.fname = null;
      this.csvc.lname = null;
      this.csvc.gender = null;
      this.csvc.address = '';
      this.csvc.city = '';
      this.csvc.state = '';
      this.csvc.email = null;
      return true;
    } else {
      return false;
    }
    // return confirm('Are you sure?');

}

}
