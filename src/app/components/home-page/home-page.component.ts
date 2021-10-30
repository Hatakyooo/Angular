import { Component, OnInit } from '@angular/core';
import {AppService } from '../../app.service';
import { ActivatedRoute, Data } from '@angular/router';
interface Users {
  id: number,
  name: string,
  title: string
};
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  User: Users[] = [];
  // hay User : any = [];
  load: Boolean = false;
  textSreach : string = '';
   constructor( 
     private route : ActivatedRoute,
     private DataService: AppService){
   };
   
    ngOnInit(){
          
          this.load = true;
          this.DataService.GetData().then(data => {
            console.log(data)
            this.User = data;
            this.load = false;   
            console.log('Promise resolved.')
          })
          .catch(error => console.error
          ('I will not wait until promise is resolved..')
          );
        }
   
               
   deleteid(id: number) {
     
    this.DataService.deleteData(id).then(() => {
      this.User = this.User.filter(function(val){
        return val.id != id;
      })      
    }).catch(error => console.error
      ('I will not wait until promise is resolved..')
      );
  }

}
