import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerinformation',
  templateUrl: './customerinformation.component.html',
  styleUrls: ['./customerinformation.component.css']
})
export class CustomerinformationComponent implements OnInit {

  private customerid: any;
  private customer: any;


  constructor( private csvc: CustomerService ,private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.customerid = parseInt(params['id']);
      
      
      
      this.csvc.GetCustomersByIdAsync(this.customerid).subscribe(data => {
        this.customer = data;
      })

    });

   }


  



  ngOnInit() {
  }

  onActivate(component){
    console.log(component)
    

    component.parentId.subscribe(data=>{
      this.customerid = data
    })

  }


}
