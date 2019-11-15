import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  logstatus: boolean;
  constructor(private http: HttpClient) {
    this.logstatus = false;
  }

   fname: string;
   lname: string;
   gender: string;
   address: string;
   city: string;
  state: string;
   email: string;

  GetAllCustomersAsync(): Observable<any> {
    return this.http.get('http://13.233.101.232:8080/SpringRest2/customers');
  }

  GetCustomersByIdAsync(customerId: number): Observable<any> {
    return this.http.get('http://13.233.101.232:8080/SpringRest2/customer?id=' + customerId);
  }

  EditCustomersAsync(customer: any): Observable<any> {
    return this.http.put('http://13.233.101.232:8080/SpringRest2/editcustomer', customer);
  }

  AddCustomersAsync(): Observable<any> {

    const customer: any = {
      firstName: this.fname,
      lastName: this.lname,
      gender: this.gender,
      address: this.address,
      city: this.city,
      state: this.state,
      email: this.email,
    };

    return this.http.post('http://13.233.101.232:8080/SpringRest2/addcustomer', customer);
  }

  DeleteCustomersAsync(customerId: number): Observable<any> {
    return this.http.delete('http://13.233.101.232:8080/SpringRest2/deletecustomer?id=' + customerId);
  }
  GetOrdersByIdAsync(orderId: number): Observable<any> {
    return this.http.get('http://13.233.101.232:8080/SpringRest2/order?id=' + orderId);
  }

  GetAllOrdersAsync(): Observable<any> {
    return this.http.get('http://13.233.101.232:8080/SpringRest2/orders');
  }
}
