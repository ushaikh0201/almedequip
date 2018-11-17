import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataServices } from '../services/data-services';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  oneAtATime: boolean = true;
  isOpened: boolean = false;
  products:any;
  productByCategory: any = [];
  category: any;

  constructor(private dataServices:DataServices, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params: Params)=>{
      this.category           = params['category'];
      this.products           = this.dataServices.products;
      this.getProductByCategory();
    });
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    
  }

  getProductByCategory(){
    this.productByCategory = [];
    if(this.category){
      this.products.forEach(arr => {
        if(arr.category == this.category){
          this.productByCategory.push(arr);  
        }
      });
    }
    else{
      this.productByCategory = this.products;
    }
    console.log("this.productByCategory",this.productByCategory)
  }

  openPanelBody(){
    console.log("Clicked");
    $('.panel accordion-toggle').attr('area-expanded', 'true');
  }
}
