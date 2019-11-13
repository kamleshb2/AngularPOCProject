import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { customer } from '../../Model/model.component';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Output()
  parentId: EventEmitter<number> = new EventEmitter<number>();
  customerid: number;
  customer: customer;
  constructor( private csvc: CustomerService ,private router: Router, private route: ActivatedRoute) {
   
   }
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.customerid = parseInt(params['id']);
    
      
      this.csvc.GetCustomersByIdAsync(this.customerid).subscribe(data => {
        this.customer = data;
      })

    });
   
    this.parentId.emit(this.customerid);
  }

  getCustomerId(){
    return this.customerid
  }
}

