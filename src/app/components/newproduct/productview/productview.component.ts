import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { environment } from 'src/environments/environment';
import { TableColumnTypes } from 'src/app/classes/table-column-types/table-column-types'

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {

 
  resourceName = "products";
  baseUrl: string = "";
  public id;
  public data;
  viewDetails = [
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
      "title": "Minimum Stock",
      "key": "minimumStock",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Maximum Stock",
      "key": "maximumStock",
      "type": TableColumnTypes.Text,
    },
    {
      "title": "Unit",
      "key": "unit",
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

  handleUpdateData() {
    console.log("check product id:"+this.id);
    this.router.navigate(['admin/product/' + this.id + '/update']);
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
