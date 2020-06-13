import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StructureComponent } from './components/structure/structure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { CustomerPassbookComponent } from './components/customer/customer-passbook/customer-passbook.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './components/vendor/vendor-create/vendor-create.component';
import { VendorViewComponent } from './components/vendor/vendor-view/vendor-view.component';
import { VendorPassbookComponent } from './components/vendor/vendor-passbook/vendor-passbook.component';
import { ProductlistComponent } from './components/newproduct/productlist/productlist.component';
import { ProductcreateComponent } from './components/newproduct/productcreate/productcreate.component';
import { ProductviewComponent } from './components/newproduct/productview/productview.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'admin', component: StructureComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customers/list', component: CustomerListComponent },
      { path: 'customers/create', component: CustomerCreateComponent },
      { path: 'customers/:id/update', component: CustomerCreateComponent },
      { path: 'customers/:id/view', component: CustomerViewComponent },
      { path: 'customers/:id/passbook', component: CustomerPassbookComponent },

      { path: 'vendors/list', component: VendorListComponent },
      { path: 'vendors/create', component: VendorCreateComponent },
      { path: 'vendors/:id/update', component: VendorCreateComponent },
      { path: 'vendors/:id/view', component: VendorViewComponent },
      { path: 'vendors/:id/passbook', component: VendorPassbookComponent },

      { path: 'product/list', component: ProductlistComponent },
      { path: 'product/create', component: ProductcreateComponent },
      { path: 'product/:id/update', component: ProductcreateComponent },
      { path: 'product/:id/view', component: ProductviewComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
