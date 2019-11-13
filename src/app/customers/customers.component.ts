import { TableModule, Table } from 'primeng/table';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { customer } from './Model/model.component';
import {MatSortModule , Sort} from '@angular/material/sort';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],

})
export class CustomersComponent implements OnInit {

  @ViewChild('tt', {static: true}) dt: Table;


  config: any;
  msgs: any[];
  id: number;
  // tslint:disable-next-line: ban-types
  gridView: Boolean = true;
  customers: customer[];
  sortedData: customer[];

  // tslint:disable-next-line: ban-types

  cols: any[];
  genders: SelectItem[];
  discities: any[] = [];
  disStates: any[] = [];
  cities: SelectItem[] = [];
  states: SelectItem[] = [];
  first = 0;

  constructor(private csvc: CustomerService, private router: Router,
              private confsvc: ConfirmationService,  private msvc: MessageService) {}

  ngOnInit() {
    this.csvc.GetAllCustomersAsync().subscribe( data => {
      window.scrollTo(0, 0);
      this.customers = data;
      this.sortedData = this.customers.slice();

      this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.customers.length
      };

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.customers.length; i++) {
        // console.log('city added ' + !this.cities.includes(this.customers[i].city));
        if (!this.discities.includes(this.customers[i].city)) {
        this.discities.push(this.customers[i].city);
        this.cities.push({ label: this.customers[i].city, value: this.customers[i].city });
        }
        if (!this.disStates.includes(this.customers[i].state)) {
          this.disStates.push(this.customers[i].state);
          console.log(this.customers[i].firstName);
          this.states.push({ label: this.customers[i].state, value: this.customers[i].state });
          }
      }

    });

    this.cols = [
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'gender', header: 'Gender' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'email', header: 'Email' }
  ];

    this.genders = [
      { label: 'All Genders', value: null },
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' }
    ];

    console.log('New cities ' + this.cities);

    }


  ViewType(): void {
    this.gridView = !this.gridView;
  }

  edit(customerid: number) {
    this.router.navigate(['/customer-list/editcustomer', customerid]);
  }

  FilterCustomer(filtered: any) {
    this.customers = filtered;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  deleteBook(customerid: number) {

    this.confsvc.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          console.log(2);
          this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Record deleted'}];
          this.id = customerid;
          this.msvc.add({severity: 'success', summary: 'Success Message', detail: 'Customer Details Deleted'});
          this.csvc.DeleteCustomersAsync(customerid).subscribe(data => {
          console.log(data);
          this.ngOnInit();
            });
          // this.csvc.GetAllCustomersAsync().subscribe(data => {
          //   this.customers = data;
          // });
      },
      reject: () => {
        console.log(3);
        this.id = customerid;
        this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
  });
  }

  // sortData(sort: Sort) {
  //   const data = this.customers.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'first': return this.compare(a.firstName, b.firstName, isAsc);
  //       case 'last': return this.compare(a.lastName, b.lastName, isAsc);
  //        case 'gender': return this.compare(a.Gender, b.Gender, isAsc);
  //       // case 'carbs': return compare(a.carbs, b.carbs, isAsc);
  //       // case 'protein': return compare(a.protein, b.protein, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }

  // compare(a: number | string, b: number | string, isAsc: boolean) {
  //   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  // }

  paginate(tt: Table) {
    console.log('clicked ' + tt);
    let body = tt.containerViewChild.nativeElement.getElementsByClassName('ui-table-scrollable-body')[0];
    console.log(body);
    body.scrollTop = 0;
  }

}
