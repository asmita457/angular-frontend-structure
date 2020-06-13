import { Component, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { Util } from 'src/app/classes/util/util'
import { TableColumnTypes } from 'src/app/classes/table-column-types/table-column-types'
import { MatDialog } from '@angular/material/dialog';
import { AddEntryComponent } from '../../modals/add-entry/add-entry.component';
import { DialogData } from 'src/app/classes/dialog-data/dialog-data';
import { PassbookAddEntryComponent } from '../../modals/passbook-add-entry/passbook-add-entry.component';
import { DialogResponseData } from 'src/app/classes/dialog-response-data/dialog-response-data';
import { ListComponentInterface } from 'src/app/interfaces/list-component-interface';

@Component({
  selector: 'app-vendor-passbook',
  templateUrl: './vendor-passbook.component.html',
  styleUrls: ['./vendor-passbook.component.scss']
})
export class VendorPassbookComponent implements OnInit,ListComponentInterface {

  resourceName = "vendors";
  dataList: any = [];

  pageSizeOptions: any = Util.pageSizes;
  filterObj: any = {};
  paginationModel: any = { ...Util.paginationModel }
  baseUrl: string = "";

  noDataPresent = true;
  totalDataLength: number = 0;

  // No Data Present 
  noDataImage = Util.noDataImage;
  noDataMessage = Util.noDataMessage;

  // Search
  searchFormControl: FormControl = new FormControl('');
  searchModel: any = ""

  // Action Menu Options - Define your component specific menu
  actionMenuType = 0;
  actionsMenuOptions: any = []

  // Column Details - Define your component specific columns
  columnDetails = [
    {
      "title": "Date",
      "key": "entryDateTime",
      "type": TableColumnTypes.Date,
    },
    {
      "title": "Message",
      "key": "message",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Credited",
      "key": "credited",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Debited",
      "key": "debited",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Balance",
      "key": "balance",
      "type": TableColumnTypes.Text,
    },

  ]

  displayedColumns: any[] = [];
  id;

  constructor(
    private router: Router,
    private apiCallService: ApiFactoryService,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private applicationRef: ApplicationRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }


  handleMenuClick(key: any, data: any) {
    throw new Error("Method not implemented.");
  }
  handleCreateData() {
    throw new Error("Method not implemented.");
  }
  handleViewData(data: any) {
    throw new Error("Method not implemented.");
  }
  handleUpdateData(data: any) {
    throw new Error("Method not implemented.");
  }
  handleDeleteData(data: any) {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {

    this.id = this.activeRoute.snapshot.params['id'];
    this.baseUrl = environment.base_url + environment.version + this.resourceName + "/" + this.id + '/passbook';
    this.handleSearchInputEvent();
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

    console.log(url);
    this.apiCallService.getList(url, pageIndex, pageSize, search, filterObj).subscribe((response) => {

      this.prepareListData(response);
    }, error => {

      // Handle errors here 
      console.log("error in get function", error);
    })
  }

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

  pageEvent($event) {

    console.log("page chnage", event);

    this.paginationModel.pageIndex = $event.pageIndex;
    this.paginationModel.pageSize = $event.pageSize;
    this.getList(this.baseUrl, this.paginationModel.pageIndex, this.paginationModel.pageSize, this.searchModel, this.filterObj);
  }

  handleDataCreatedFromDialog(dialogResponseData: DialogResponseData) {

    if (dialogResponseData.isSuccess) {

      console.log("NEw paginationmodel", this.paginationModel);
      this.paginationModel = { ...Util.paginationModel }
      console.log("NEw paginationmodel", this.paginationModel);
      this.getList(this.baseUrl, this.paginationModel.pageIndex, this.paginationModel.pageSize, '', this.filterObj)
    } else {

      // HAndle Error
    }
  }

  handleDataUpdatedFromDialog(dialogResponseData) { }

  handleOpenDialog(data) {

    let url = this.baseUrl;
    let dialogData = new DialogData("Add Entry", url, "POST", 0)

    if (data) {

      // Update Workflow
    }


    let dialogRef = this.dialog.open(PassbookAddEntryComponent, {
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'my-panel',
      width: '35%',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        let dialogResponseData = <DialogResponseData>result;
        if (dialogResponseData.isCreated) {

          this.handleDataCreatedFromDialog(dialogResponseData)
        } else {

          this.handleDataUpdatedFromDialog(dialogResponseData)
        }
      }
    })
  }
}
