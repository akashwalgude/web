import { Component } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';


constructor(private _http:HttpClient) { }
List:any=[];
 ngOnInit():void
 {
   
  
  this.GetList();
}

GetList()
{
  const getdata='https://jsonplaceholder.typicode.com/posts';
  return this._http
  .get(getdata).subscribe(result=>{
    this.List = result
  })
}
}