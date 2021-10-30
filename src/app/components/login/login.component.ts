import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : any = {
    name : "",
    pass : ""
  }
  constructor( private _location: Location,) { }

  ngOnInit(): void {
  }
  onSubmit(loginData : any){
   console.log(loginData)
   this._location.go('/home')
   window.location.href='http://localhost:4200/home';
  }
}
