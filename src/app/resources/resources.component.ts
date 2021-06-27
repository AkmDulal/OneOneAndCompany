import { Component, OnInit } from '@angular/core';
import { DataviewService } from '../dataview.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  fortest = false
  dataView:Array<any> = [];
  constructor(
    private dataviewService:DataviewService
  ){
    
  }

  ngOnInit(): void {
    this.dataviewService.getAllData().subscribe(
      (response)=>{
        this.dataView = response
      }
    )
  }


}


