import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{TableModule} from 'primeng/table';
import{DropdownModule} from 'primeng/dropdown';
import{DialogModule} from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import {NgMentionsModule} from '@nth-cloud/ng-mentions';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMentionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
