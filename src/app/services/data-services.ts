import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { data } from "../../assets/data";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServices{
    public products: any;
    public services: any;
    public serviceCategories: any;
    public dataArray: any;
    public servicesByCategories: any;

    constructor(private http: HttpClient) {
        this.dataArray          = data;
        this.products           = this.dataArray.products;
        this.services           = this.dataArray.services;
        this.serviceCategories  = this.dataArray.service_categories;
    }

    getJSONData() {
        return this.dataArray;
    }

    getAllProduct(){
        return this.products;
    }

    getAllService(){
        return this.services;
    }
    getAllServiceCategories(){
        return this.serviceCategories;
    }

    getServiceByCategory(){
        this.serviceCategories.forEach((value, key) => {
            var tempArr = [];
            this.services.forEach(ele => {
                if(value.id == ele.cat_id){
                tempArr.push(ele);
                }
            });
            value.list = tempArr;
        });
        return this.serviceCategories;
    }
}