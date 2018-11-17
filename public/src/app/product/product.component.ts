import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataServices } from '../services/data-services';
import { ContentMngService } from "../../../common/services/content-mng.service";


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
  productCategoryArray: any = [];
  category: any;

  constructor(private dataServices:DataServices, private activatedRoute: ActivatedRoute,private contentMngService: ContentMngService) { 
    /* this.activatedRoute.queryParams.subscribe((params: Params)=>{
      this.category           = params['category'];
      this.products           = this.dataServices.products;
    }); */
  }

  ngOnInit() {
    this.getAllProduct();
    this.getProductCategories();
  }

  ngAfterViewInit(){
    
  }

  getProductByCategory(){
    this.productByCategory = [];
    if(this.products.length > 0){
      this.products.forEach(arr => {
        if(arr.product_categories._id == this.category){
          this.productByCategory.push(arr);  
        }
      });
    }
    else{
      this.productByCategory = this.products;
    }
    console.log("this.productByCategory",this.productByCategory)
  }

  getProductCategories(){
    this.contentMngService.getProductCategories().subscribe(res=>{
      this.productCategoryArray = res.data;
      console.log('productCategoryArray', this.productCategoryArray);
    })
  }

  getAllProduct(){
    this.contentMngService.getAllProduct().subscribe(res=>{
      if(res){
        this.products = res.data;
        console.log("this.products", this.products);
        // this.getProductByCategory();
      }
    })
  }

  openPanelBody(){
    console.log("Clicked");
    $('.panel accordion-toggle').attr('area-expanded', 'true');
  }
}
