import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppService } from '../../app.service';
import {  FormGroup , FormControl  } from '@angular/forms';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Users : any = {
    id  : "",
    name : "",
    title : ""
  }
  
  constructor(
    private _location: Location,
    private route : ActivatedRoute,
    private DataService: AppService
  ) { }

  titleId = 0;
  ngOnInit(): void {
  this.route.paramMap.subscribe(params =>{
      this.titleId = Number(params.get('id'));
  })
  
  this.DataService.GetDataId(this.titleId).then(data => {
    console.log(data)
    this.Users = data;
      
    console.log('Promise resolved.')
  })
  .catch(error => console.error
  ('I will not wait until promise is resolved..')
  );

  }
  onSubmit(data : any){
      console.log(data)
      this.DataService.editDataId(this.Users.id , data).then(data =>
        {       
          this._location.back();      
        }
        ).catch(error => console.error
            ('sửa thất bại..')
            );
   }
}
