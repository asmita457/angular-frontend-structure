import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {

  title;
  button1;
  button2;

  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<AddEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {

    this.title = this.data['title'];
    this.button1 = this.data['button1'];
    this.button2 = this.data['button2'];
  }

  close(){
    this.dialogRef.close();
  }

}
