import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowser } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module'
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ApiService } from './services/api/api.service';
import { StructureComponent } from './components/structure/structure.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { CustomerPassbookComponent } from './components/customer/customer-passbook/customer-passbook.component';
import { AddEntryComponent } from './components/modals/add-entry/add-entry.component';
import { PassbookAddEntryComponent } from './components/modals/passbook-add-entry/passbook-add-entry.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './components/vendor/vendor-create/vendor-create.component';
import { VendorViewComponent } from './components/vendor/vendor-view/vendor-view.component';
import { VendorPassbookComponent } from './components/vendor/vendor-passbook/vendor-passbook.component';
import { ProductlistComponent } from './components/newproduct/productlist/productlist.component';
import { ProductcreateComponent } from './components/newproduct/productcreate/productcreate.component';
import { ProductviewComponent } from './components/newproduct/productview/productview.component';


@NgModule({
  declarations: [
    AppComponent,
    StructureComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerViewComponent,
    CustomerPassbookComponent,
    AddEntryComponent,
    PassbookAddEntryComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorViewComponent,
    VendorPassbookComponent,
    ProductlistComponent,
    ProductcreateComponent,
    ProductviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [AddEntryComponent, PassbookAddEntryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
