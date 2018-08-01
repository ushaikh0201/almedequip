import { Component, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  products:any;
  services:any;
  constructor(protected dataServices:DataServices) { }

  ngOnInit() {
    var data = this.dataServices.getJSONData();
    this.products = data.products;
    this.services = data.services;
  }
}
