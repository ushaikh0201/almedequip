import { Component, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public services: any;
  public serviceCategories: any;
  public dataArray: any;
  constructor(private dataServices:DataServices) { }

  ngOnInit() {
    this.serviceCategories = this.dataServices.getJSONData();
    console.log("this.serviceCategories", this.serviceCategories);
  }
}
