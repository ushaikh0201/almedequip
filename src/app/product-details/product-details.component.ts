import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataServices } from '../services/data-services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  code:any;
  public product = [];
  public temp = "";
  products:any;
  oneAtATime: boolean = true;
  
  constructor(private dataServices:DataServices, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params: Params)=>{
      this.code     = params['code'];
      var data      = this.dataServices.getJSONData();
      this.products = data.products;
      this.product  = this.products.find(item => item.code == this.code);
      console.log(this.product);
    });
  }

  ngOnInit() {
    /* this.product = this.productArray.find(item => item.code == "laf");
    console.log(this.product); */
  }

}
