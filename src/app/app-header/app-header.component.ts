import { Component, OnInit } from '@angular/core';
import { DataServices } from "../services/data-services";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  products:any;
  services:any;
  serviceCategories:any;
  dataArray:any = [];
  constructor(protected dataServices: DataServices) {
    this.products = this.dataServices.products;
    this.services = this.dataServices.services;
    this.serviceCategories = this.dataServices.getServiceByCategory();
  }

  ngOnInit() {
    // console.log("dataArray", this.serviceCategories);
  }
}
