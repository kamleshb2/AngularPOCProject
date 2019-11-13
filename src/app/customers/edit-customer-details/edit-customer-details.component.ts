import { SelectItem } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-customer-details',
  templateUrl: './edit-customer-details.component.html',
  styleUrls: ['./edit-customer-details.component.css']
})
export class EditCustomerDetailsComponent implements OnInit {

  @Input()
  private customerid: number;
  private customer: any;
  private editForm: FormGroup;
  private submitClicked: boolean;
  private Gen: SelectItem[];


  constructor(private csvc: CustomerService, private router: Router, private route: ActivatedRoute,  private msvc: MessageService) {
    this.Gen = [
      {label: 'Select Gender', value: null},
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'}
    ];
   }

  ngOnInit() {

    this.route.params.subscribe( params => {
      // tslint:disable-next-line: radix tslint:disable-next-line: no-string-literal
      this.customerid = parseInt(params['id']);

      this.csvc.GetCustomersByIdAsync(this.customerid).subscribe(data => {
        this.customer = data;
        // console.log(this.customer.Name);

        this.editForm = new FormGroup({
          fname: new FormControl(this.customer.firstName, [Validators.required, this.ValidateString]),
          lname: new FormControl(this.customer.lastName, [Validators.required, this.ValidateString]),
          gender: new FormControl(this.customer.gender, Validators.required),
          address: new FormControl(this.customer.address),
          city: new FormControl(this.customer.city),
          state: new FormControl(this.customer.state),
          email: new FormControl(this.customer.email, Validators.email)
        });
      });

    });


    this.submitClicked = false;
  }

  edit() {

    this.customer.firstName = this.editForm.get('fname').value;
    this.customer.lastName = this.editForm.get('lname').value;
    this.customer.gender = this.editForm.get('gender').value;
    this.customer.address = this.editForm.get('address').value;
    this.customer.city = this.editForm.get('city').value;
    this.customer.state = this.editForm.get('state').value;
    this.customer.email = this.editForm.get('email').value;
    this.submitClicked = true;
    console.log(this.editForm.errors);
    if (!this.editForm.get('fname').errors) {
      this.csvc.EditCustomersAsync(this.customer).subscribe(data => {
        console.log(data);
      });
      this.msvc.add({severity: 'success', summary: 'Success Message', detail: 'Details Edited'});
      setTimeout(() => {
        this.router.navigate(['/customer-list']);
      }, 1000);
    }
  }

  cancel() {
    this.router.navigate(['/customer-list']);
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


}
