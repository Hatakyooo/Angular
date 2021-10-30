import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppService } from '../../app.service';
import {  FormGroup , FormControl  } from '@angular/forms';
import {Location} from '@angular/common';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addData : any = {
    id  : "",
    name : "",
    title : ""
  }

  constructor(
    private _location: Location,
    private route : ActivatedRoute,
    private DataService: AppService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(DataSave : any){
    console.log(DataSave)
    this.DataService.addData(DataSave).then(data =>
      {       
        this._location.back();      
      }
      );
 }
}
