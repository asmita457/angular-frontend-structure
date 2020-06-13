import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { environment } from 'src/environments/environment';
import { TableColumnTypes } from 'src/app/classes/table-column-types/table-column-types'

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.scss']
})
export class VendorViewComponent implements OnInit {

  resourceName = "vendors";
  baseUrl: string = "";
  public id;
  public data;

  viewDetails = [
    {
      "title": "Organisation Name",
      "key": "name",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Mobile",
      "key": "mobile",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Email",
      "key": "mobile",
      "type": TableColumnTypes.Text,
    },

    {
      "title": "Gst Number",
      "key": "gstNumber",
      "type": TableColumnTypes.Text,
    },


    {
      "title": "Cnn Number",
      "key": "cnnNumber",
      "type": TableColumnTypes.Text,
    },

    {
      "title": "Address",
      "key": "address",
      "type": TableColumnTypes.Text,
    },

    {
      "title": "City",
      "key": "city",
      "type": TableColumnTypes.Text,
    },

    {
      "title": "State",
      "key": "state",
      "type": TableColumnTypes.Text,
    },

    {
      "title": "Country",
      "key": "country",
      "type": TableColumnTypes.Text,
    },

    {
      "title": "Pincode",
      "key": "pinCode",
      "type": TableColumnTypes.Text,
    },

    {
      "title": "Balance",
      "key": "balance",
      "type": TableColumnTypes.Text,
    },
  ]


  constructor(private router: Router, private apiCallService: ApiFactoryService, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.params.id;
    this.baseUrl = environment.base_url + environment.version + this.resourceName + "/" + this.id;
    this.fetchData(this.baseUrl);
  }

  prepareViewData(response) {

    console.log("Response", response);
    this.data = response['result'];

    // Data Validations for required fields
    if (this.data['cnnNumber'] && this.data['cnnNumber'] == 0) {
      this.data['cnnNumber'] = "NA"
    }

    if (this.data['pinCode'] && this.data['pinCode'] == 0) {
      this.data['pinCode'] = "-"
    }

    console.log("Data:", this.data);
  }

  goBack() {

    return window.history.back()
  }


  fetchData(url) {

    this.apiCallService.getSingle(url).subscribe((response) => {

      this.prepareViewData(response);
    }, error => {

      // Handle errors here 
      console.log("error in get function", error);
    })
  }

}
