import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { Util } from 'src/app/classes/util/util'
import { TableColumnTypes } from 'src/app/classes/table-column-types/table-column-types'
import { ListComponentInterface } from 'src/app/interfaces/list-component-interface';
import { DialogResponseData } from 'src/app/classes/dialog-response-data/dialog-response-data';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit, ListComponentInterface {

  resourceName = "products";
  dataList: any = [];

  pageSizeOptions: any = Util.pageSizes;
  filterObj: any = {};
  paginationModel: any = { ...Util.paginationModel }
  baseUrl: string = "";

  noDataPresent = true;
  totalDataLength = 0;

  // No Data Present 
  noDataImage = Util.noDataImage;
  noDataMessage = Util.noDataMessage;

  // Search
  searchFormControl: FormControl = new FormControl('');
  searchModel: any = ""

  // Action Menu Options - Define your component specific menu
  actionMenuType = 1;
  actionsMenuOptions: any = [
   
    {
      "name": "View",
      "key": 'view',
      "icon": "./assets/png/View.png"
    },
    {
      "name": "Update",
      "key": 'update',
      "icon": "./assets/png/Edit.png"
    },
    {
      "name": "Delete",
      "key": 'delete',
      "icon": "./assets/png/Delete.png"
    }
  ]

  // Column Details - Define your component specific columns
  columnDetails = [
    {
      "title": "Name",
      "key": "name",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Current Stock",
      "key": "stock",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Last Updated",
      "key": "modified",
      "type": TableColumnTypes.Date,
    },
    {
      "title": "Price",
      "key": "salePrice",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Action",
      "key": "",
      "type": TableColumnTypes.Actions,
    },
  ]

  displayedColumns: any[] = [];

  constructor(private router: Router,
    public api : ApiService, private apiCallService: ApiFactoryService) { }

  ngOnInit() {

    this.handleSearchInputEvent();
    this.baseUrl = environment.base_url + environment.version + this.resourceName;
    this.getList(this.baseUrl, this.paginationModel.pageIndex, this.paginationModel.pageSize, '', this.filterObj)
  }


  prepareListData(response) {

    this.dataList = response.result.list;
    this.totalDataLength = response.result.count;

    if (this.dataList.length == 0) {

      this.noDataPresent = true;
    } else {

      this.displayedColumns = this.columnDetails.map(a => a.title);
      this.noDataPresent = false;
    }
  }

  // do not change anything below the functions
  getList(url, pageIndex, pageSize, search, filterObj) {

    this.apiCallService.getList(url, pageIndex, pageSize, search, filterObj).subscribe((response) => {

      this.prepareListData(response);
    }, error => {

      // Handle errors here 
      console.log("error in get function", error);
    })
  }

  // Search
  handleSearchInputEvent() {

    this.searchFormControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      searchKey => {

        this.searchModel = searchKey;
        this.getList(this.baseUrl, this.paginationModel.pageIndex, this.paginationModel.pageSize, searchKey, this.filterObj)
      }
    )
  }

  // Pagination
  pageEvent($event) {

    console.log("page chnage", event);

    this.paginationModel.pageIndex = $event.pageIndex;
    this.paginationModel.pageSize = $event.pageSize;
    this.getList(this.baseUrl, this.paginationModel.pageIndex, this.paginationModel.pageSize, this.searchModel, this.filterObj);
  }

  // Menu click handling
  handleMenuClick(key, data) {

    switch (key) {
      case "view":
        console.log("View", data)
        this.handleViewData(data);
        break;
      case "delete":
        console.log("Delete", data)
        this.handleDeleteData(data);
        break;
      case "update":
        console.log("Update", data);
        this.handleUpdateData(data);
        break;
    
    }
  }
  

  // Click on Add
  handleCreateData() {
    this.router.navigate(['admin/product/create']);
  }

  handleViewData(data) {
    this.router.navigate(['admin/product/' + data.id + '/view']);
  }

  handleUpdateData(data) {
    console.log("check product id:"+data.id);
    this.router.navigate(['admin/product/' + data.id + '/update']);
  }


  handleDeleteData(data) { 
    console.log("show id:"+data.id);
    let urlDelete = environment.base_url + environment.version + "products/" + data.id;
    this.api.deleteRecord(urlDelete).subscribe(MyResponse => {
      alert("Enrty deleted Successfully");
      this.getList(this.baseUrl, this.paginationModel.pageIndex, this.paginationModel.pageSize, '', this.filterObj)
       
     
    },
      error => {
      })


  }


  handleDataCreatedFromDialog(dialogResponseData: DialogResponseData) {}

  handleDataUpdatedFromDialog(dialogResponseData) { }

  handleOpenDialog(data) {}

}