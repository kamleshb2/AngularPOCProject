import { SelectItem } from 'primeng/api';
import { CanComponentDeactivate } from './../../add-deactivate.service';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { IfStmt } from '@angular/compiler';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, CanComponentDeactivate {

  accountForm: FormGroup;
  private submitClicked: boolean;
  private Gen: SelectItem[];


constructor(private csvc: CustomerService, private router: Router) {
  this.Gen = [
    {label: 'Select Gender', value: null},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
  ];



   }


  ngOnInit() {
    this.accountForm = new FormGroup({
    fname: new FormControl(this.csvc.fname, [Validators.required, this.ValidateString]),
    lname: new FormControl(this.csvc.lname, [Validators.required, this.ValidateString]),
    gender: new FormControl(this.csvc.gender, Validators.required)
  });
    this.submitClicked = false;
    }

next() {
    this.csvc.fname = this.accountForm.get('fname').value;
    this.csvc.lname = this.accountForm.get('lname').value;
    this.csvc.gender = this.accountForm.get('gender').value;
    this.submitClicked = true;
    if (!this.accountForm.errors && !this.accountForm.get('lname').errors) {
      console.log('nav');
      this.router.navigate(['/customer-list/addcustomer/profile']);
    }
  }

  ValidateString(control: FormControl) {
    const pattern = /^[A-Za-z ]+$/; // can change regex with your requirement
    // if validation fails, return error name & value of true
    if (!pattern.test(control.value)) {
        return { validString: true };
    }
    // otherwise, if the validation passes, we simply return null
    return null;
}
canDeactivate(nextState: import('@angular/router').RouterStateSnapshot): boolean {

    let urls: string[];
    urls = nextState.url.split('/');

    if ((urls.includes('profile') || urls.includes('account') || urls.includes('finish')) && !this.submitClicked) {
      return false;
    } else if ((urls.includes('profile') || urls.includes('account') || urls.includes('finish')) && this.submitClicked) {
      return true;
    }
    // if (this.accountForm.dirty) {
    //     return confirm('Are you sure?');
    //   } else {
    //     return true;
    //   }
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
