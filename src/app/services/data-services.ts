import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServices{
    public services: any;
    public serviceCategories: any;
    public dataArray: any;
    
    constructor(private http: HttpClient) {
        
    }

    async getJSONData() {
        this.dataArray = await this.getServiceByCategory().then(res=>{
                            return res;
                        }).catch(err=>{
                            console.log(err);
                        });
        console.log(this.dataArray);
        return this.dataArray;
    }

    async getServiceByCategory(){
        //The await keyword will make the d variable wait for the json file
        var data = await fetch("./assets/data.json").then(file => file.json());
        return data;
        /* 
        var serviceCategories = await this.getJSON().then(res=>{
            this.services           = res.services;
            this.serviceCategories  = res.service_categories;
            this.serviceCategories.forEach(element => {
                var dataArr = [];
                this.services.forEach(sl => {
                if(element.id == sl.cat_id){
                    dataArr.push({name:sl.name, code:sl.code});
                }
                })
                element['list'] = dataArr;
            });
        });
        console.log("serviceCategories", serviceCategories)
        return serviceCategories; */
    }
}