import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  customerid: number;
  orders: any;
  total:any = 0;
  constructor(private csvc : CustomerService,private route: ActivatedRoute) { }
  
  ngOnInit() {

    this.route.params.subscribe( params => {
      this.customerid = parseInt(params['id']);

    this.csvc.GetOrdersByIdAsync( this.customerid).subscribe( data =>{
this.orders= data;

      for(let i = 0; i < this.orders.length; i++){
        this.total = this.total +  this.orders[i].unitprice * this.orders[i].quantity
      }
    })
  });
  }

}
