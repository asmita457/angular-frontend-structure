import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateUpdateComponentInterface } from 'src/app/interfaces/create-update-component-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.scss']
})
export class ProductcreateComponent implements OnInit, CreateUpdateComponentInterface {

  resourceName = "products";
  baseUrl: string = "";
  id;
  data;


  isCreate = 1;
  titleMessage = "Create new Product";

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    buyPrice: new FormControl('',Validators.required),

    unit: new FormControl('',Validators.required),
    salePrice: new FormControl('',Validators.required),
    hsnCode: new FormControl('',Validators.required),

    gstPercentage: new FormControl('',Validators.required),
    minimumStock: new FormControl('',Validators.required),
    maximumStock: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
   
  });

  constructor(private router: Router, private apiCallService: ApiFactoryService, public activeRoute: ActivatedRoute) { }
 

  ngOnInit() {

    this.baseUrl = environment.base_url + environment.version + this.resourceName;

    this.id = this.activeRoute.snapshot.params.id;

    if (this.id) {

      this.isCreate = 0;
      this.titleMessage = "Update Product";
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
        this.router.navigate(['admin/product/list']);
        this.handlePostSuccess(response);
      }, error => {

        console.log("error in get function", error);
        this.handlePostError(error);
      })
    } else {

      let url = this.baseUrl + "/" + this.id;
      this.apiCallService.putData(url, data).subscribe((response) => {
        this.router.navigate(['admin/product/list']);
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
