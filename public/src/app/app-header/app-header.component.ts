import { Component, OnInit } from '@angular/core';
import { DataServices } from "../services/data-services";
import { ContentMngService } from "../../../common/services/content-mng.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  products:any;
  services:any;
  serviceCategories:any;
  portfolioCategories:any;
  dataArray:any = [];
  productCategoryArray: any = [];
  constructor(protected dataServices: DataServices, private contentMngService: ContentMngService) {
    // this.products = this.dataServices.products;
    this.services = this.dataServices.services;
    this.serviceCategories  = this.dataServices.getServiceByCategory();
    this.portfolioCategories= this.dataServices.getPortfolioByCategory();
  }

  ngOnInit() {
    // console.log("dataArray", this.serviceCategories);
    this.getProductCategories();
    this.getAllProduct();
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
      }
    })  
  }
}
