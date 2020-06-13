import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from 'src/app/classes/dialog-data/dialog-data';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogResponseData } from 'src/app/classes/dialog-response-data/dialog-response-data';

@Component({
  selector: 'app-passbook-add-entry',
  templateUrl: './passbook-add-entry.component.html',
  styleUrls: ['./passbook-add-entry.component.scss']
})
export class PassbookAddEntryComponent implements OnInit {

  public dialogData: DialogData;
  public dialogResponseData: DialogResponseData;

  baseUrl: string = "";

  form = new FormGroup({
    message: new FormControl(''),
    amount: new FormControl(''),
  });

  constructor(

    private apiCallService: ApiFactoryService,
    public dialogRef: MatDialogRef<PassbookAddEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.dialogData = <DialogData>data;
    this.baseUrl = this.dialogData.apiUrl;

    if (this.dialogData.id) {

      this.fetchData(this.baseUrl);
    }
  }

  ngOnInit(): void {

    console.log("Dialog Data", this.dialogData);
  }

  // Do the things before dialog close
  handleDialogClose() {

    this.dialogRef.close();
  }

  onSubmit(data) {

    let apiData = data.value;
    apiData['entryDateTime'] = new Date()
    this.handlePostData(data.value);
  }

  handlePostSuccess(data) {

    alert("Enrty Created Successfully");
    this.form.reset()

    this.dialogResponseData = new DialogResponseData(true, data.result);
    this.dialogRef.close(this.dialogResponseData)
  }

  handlePostError(err) {

    alert("Error for create");

    this.dialogResponseData = new DialogResponseData(false, {});
    this.dialogRef.close(this.dialogResponseData)
  }

  handlePutSuccess(data) {

    alert("Enrty updated Successfully");
    this.dialogResponseData = new DialogResponseData(true, data.result, 0);
    this.dialogRef.close(this.dialogResponseData)
  }

  handlePutError(err) {

    alert("Error for update")
    this.dialogResponseData.isSuccess = false;
    this.dialogResponseData = new DialogResponseData(false, {}, 0);
    this.dialogRef.close(this.dialogResponseData)
  }

  handlePostData(data) {

    if (this.dialogData.apiMethod == "POST") {

      this.apiCallService.postData(this.baseUrl, data).subscribe((response) => {

        this.handlePostSuccess(response);
      }, error => {

        console.log("error in get function", error);
        this.handlePostError(error);
      })
    } else if (this.dialogData.apiMethod == 'PUT') {

      this.apiCallService.putData(this.baseUrl, data).subscribe((response) => {

        this.handlePutSuccess(response);
      }, error => {

        console.log("error in get function", error);
        this.handlePutError(error);
      })
    }
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
