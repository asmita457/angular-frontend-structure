import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  indexActive: any = 0;

  menuItems = [
    {
      icon: 'dashboard',
      name: 'Dashboard',
      url: '/admin/dashboard'
    },
    {
      icon: 'description',
      name: 'Invoices',
      url: '/admin/sales-list'
    },
    {
      icon: 'swap_vert',
      name: 'Purchase Order',
      url: '/admin/purchase-order-list'
    },
    // {
    //   icon: 'compare_arrows',
    //   name: 'GRN',
    //   url: '/admin/grn-list'
    // },
    {
      icon: 'people',
      name: 'Vendor',
      url: '/admin/vendors/list'
    },
    {
      icon: 'drag_indicator',
      name: 'Product',
      url: '/admin/product/list'
    },
  

    {
      icon: 'people',
      name: 'Customer',
      url: '/admin/customers/list'
    },
    // {
    //   icon: 'compare_arrows',
    //   name: 'Customer Passbook',
    //   url: '/admin/passbook-list'
    // },
    // {
    //   icon: 'compare_arrows',
    //   name: 'Vendor Passbook',
    //   url: '/admin/vendor-passbook-list'
    // },
    {
      icon: 'compare_arrows',
      name: 'Reports',
      url: '/admin/reports'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  activeIndex(index) {
    this.indexActive = index;
  }
}
