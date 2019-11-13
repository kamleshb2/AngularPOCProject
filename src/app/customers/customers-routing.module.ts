import { AddDeactivateService } from './add-deactivate.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { MapsViewComponent } from './maps-view/maps-view.component';
import { SearchComponent } from './search/search.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AccountComponent } from './addcustomer/account/account.component';
import { ProfileComponent } from './addcustomer/profile/profile.component';
import { FinishComponent } from './addcustomer/finish/finish.component';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';
import { CustomerinformationComponent } from './customerinformation/customerinformation.component';
import { CustomerDetailsComponent } from './customerinformation/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customerinformation/customer-orders/customer-orders.component';
import { CustomerInfoEntryGuard } from './customer-info-entry.guard';

const routes: Routes = [{ path: '', component: CustomersComponent },
{path: 'maps', component: MapsViewComponent},
{path: 'customer-information', component: CustomerinformationComponent, children: [
  { path: 'customer-details/:id', component: CustomerDetailsComponent},
  { path: 'customer-orders/:id', component: CustomerOrdersComponent},
  { path: 'editcustomer/:id', component: EditCustomerDetailsComponent}]},

  {path: 'search', component: SearchComponent},
  {path: 'editcustomer/:id', component: EditCustomerDetailsComponent},
{ path: 'addcustomer', component: AddcustomerComponent, children: [
  { path: 'account', component: AccountComponent, canDeactivate: [AddDeactivateService]},
  { path: 'profile', component: ProfileComponent, canDeactivate: [AddDeactivateService]},
  { path: 'finish', component: FinishComponent, canDeactivate: [AddDeactivateService]},
  { path: '', redirectTo: '/customer-list/addcustomer/account', pathMatch: 'full'}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
