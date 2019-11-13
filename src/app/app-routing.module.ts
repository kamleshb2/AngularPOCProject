import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AuthGuard } from './auth.guard';
import { OrderListPageComponent } from './order-list-page/order-list-page.component';


const routes: Routes = [{ path: 'customer-list', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), 
canActivate:[AuthGuard] },

{path: 'login', component: LoginComponent},
{path: 'about', component: AboutPageComponent, canActivate:[AuthGuard]},
{path: 'orders', component:OrderListPageComponent, canActivate:[AuthGuard]},
{path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
