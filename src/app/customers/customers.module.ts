
import { DropdownModule } from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import { AddDeactivateService } from './add-deactivate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {MatSortModule} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';
import { MapsViewComponent } from './maps-view/maps-view.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import {SearchService} from './search/search.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AccountComponent } from './addcustomer/account/account.component';
import { ProfileComponent } from './addcustomer/profile/profile.component';
import { FinishComponent } from './addcustomer/finish/finish.component';
import { CustomerinformationComponent } from './customerinformation/customerinformation.component';
import { CustomerDetailsComponent } from './customerinformation/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customerinformation/customer-orders/customer-orders.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/components/common/messageservice';
import {TableModule} from 'primeng/table';

import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [CustomersComponent, SearchComponent, EditCustomerDetailsComponent,
    MapsViewComponent, DeleteCustomerComponent, AddcustomerComponent, AccountComponent,
    ProfileComponent, FinishComponent, CustomerinformationComponent,
    CustomerDetailsComponent, CustomerOrdersComponent],
  imports: [
    HttpClientModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    CommonModule,
    MatSortModule,
    DropdownModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    FormsModule,
    ConfirmDialogModule,
    MessagesModule,
    ProgressBarModule,
    ToastModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyArgczgNb1-ePaPnaHr5NhSItBe_c4yOSg'}) // AIzaSyArgczgNb1-ePaPnaHr5NhSItBe_c4yOSg
  ],
  providers: [
    GoogleMapsAPIWrapper,
    SearchService,
    ConfirmationService,
    MessageService,
    AddDeactivateService]
})
export class CustomersModule { }
