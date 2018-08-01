import { Component, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  oneAtATime: boolean = true;
  isOpened: boolean = false;
  products:any;
  code: any;
  data: any;
  constructor(private dataServices:DataServices, public router: Router) { }

  ngOnInit() {
    var data      = this.dataServices.getJSONData();
    this.products = data.products;
  }

  ngAfterViewInit(){
    
  }

  openPanelBody(){
    console.log("Clicked");
    $('.panel accordion-toggle').attr('area-expanded', 'true');
  }
}
