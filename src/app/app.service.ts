import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IfData } from "./app.model";


@Injectable({providedIn: 'root'})
export class AppService {
    API = `https://6172306261ed900017c406a6.mockapi.io/api/test`;
    constructor(private http: HttpClient) {
    }
  
    // lấy dữ liệu
     GetData()
     {
      return this.http.get<any>(this.API).toPromise();
     };
     GetDataId(id: number)
     {
      return this.http.get<any>(this.API + '/' + id).toPromise();
     };

     deleteData(id: string | number){
         console.log(id)
        return this.http.delete<any>(this.API + '/' + id).toPromise();
      };
      addData(data: any)
      {    
          return this.http.post(this.API, data).toPromise();
      };

      editDataId(id: number , data: any) 
      {
       return this.http.put<any>(this.API + '/' + id, data).toPromise();
      };
}