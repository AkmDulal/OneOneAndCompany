import { Component } from '@angular/core';
import { DataviewService } from './dataview.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OneOneAndCompanyCodeTest';
  
  dataView:Array<any> = [];

  constructor(
    private dataviewService:DataviewService
  ){
    this.dataviewService.getAllData().subscribe(
      (response)=>{
        // console.log("dataView",response);
        this.dataView = response; 
      }
    )
  }
}
