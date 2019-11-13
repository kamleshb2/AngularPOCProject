import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customers/customer.service';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})
export class OrderListPageComponent implements OnInit {
  
  customers: any;
  orders: any;
  customerTotal: any[] = [];
  constructor(private svc : CustomerService) { }

  ngOnInit() {
    this.svc.GetAllCustomersAsync().subscribe(data=>{
    this.customers = data
 

        this.svc.GetAllOrdersAsync().subscribe(data =>{
          this.orders = data

          for(let i = 0; i < this.customers.length; i++ ) {
            this.customerTotal[this.customers[i].id] = 0
             for(let j = 0; j < this.orders.length; j++){
              if(this.customers[i].id == this.orders[j].customerid){
                console.log( this.orders[j].unitprice * this.orders[j].quantity)
    
                this.customerTotal[this.customers[i].id] =   this.customerTotal[this.customers[i].id] + this.orders[j].unitprice * this.orders[j].quantity
              }
             
            }
            console.log( this.customers[i].firstName + this.customerTotal[this.customers[i].id] )
          }
        })
       
    })
  
   

  }

}
