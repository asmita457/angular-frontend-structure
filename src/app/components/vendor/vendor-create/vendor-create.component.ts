import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { environment } from 'src/environments/environment';
import { CreateUpdateComponentInterface } from 'src/app/interfaces/create-update-component-interface';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.scss']
})
export class VendorCreateComponent implements OnInit,CreateUpdateComponentInterface {

  resourceName = "vendors";
  baseUrl: string = "";
  id;
  data;

  isCreate = 1;
  titleMessage = "Create New Vendor";

  // Create Form Group and Forms
  // Form Control Name as per API
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),

    mobile: new FormControl(''),
    gstNumber: new FormControl(''),
    cnnNumber: new FormControl(''),

    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    pinCode: new FormControl(''),
  });

  constructor(private router: Router, private apiCallService: ApiFactoryService, public activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.baseUrl = environment.base_url + environment.version + this.resourceName;

    this.id = this.activeRoute.snapshot.params.id;

    if (this.id) {

      this.isCreate = 0;
      this.titleMessage = "Update Vendor";
      let fetchUrl = this.baseUrl + "/" + this.id;
      this.fetchData(fetchUrl)
    }
  }


  onSubmit(data) {

    this.handlePostData(data.value);
  }

  handlePostSuccess(data) {

    alert("Enrty Created Successfully");
    this.form.reset()
  }

  handlePostError(data) {
  }

  handlePutSuccess(data) {

    alert("Enrty updated Successfully");
  }

  handlePutError(data) {
  }

  handlePostData(data) {

    if (!this.id) {

      this.apiCallService.postData(this.baseUrl, data).subscribe((response) => {

        this.handlePostSuccess(response);
      }, error => {

        console.log("error in get function", error);
        this.handlePostError(error);
      })
    } else {

      let url = this.baseUrl + "/" + this.id;
      this.apiCallService.putData(url, data).subscribe((response) => {

        this.handlePutSuccess(response);
      }, error => {

        console.log("error in get function", error);
        this.handlePutError(error);
      })
    }
  }

  goBack() {

    return window.history.back()
  }

  prepareViewData(response) {

    console.log("Response", response);
    this.data = response['result'];
    console.log("Fetch Data for update", this.data);

    let keys = Object.keys(this.form.controls);

    for (let i = 0; i < keys.length; i++) {

      this.form.get(keys[i]).setValue(this.data[keys[i]]);
    }
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
