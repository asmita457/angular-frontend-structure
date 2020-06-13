import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {
    username: '',
    password: ''
  };
  errorMessage: any;
  formControl = {
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  };
  constructor(
    public route : Router
  ) { }

  ngOnInit() {
  }

  loginUser(){

    this.route.navigate(['admin/dashboard'])

  }


}
