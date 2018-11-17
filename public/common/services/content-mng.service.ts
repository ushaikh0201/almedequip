import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

declare var jQuery: any;
declare var $: any;

@Injectable()
export class ContentMngService {

  constructor(private http: Http) { }
  insertProductContent(product){
    console.log(product);
    return this.http.post('/content-mng/product/insert-product', product).map((response: Response) => response.json());
  }
  
  updateProductContent(product){
    console.log(product);
    return this.http.post('/content-mng/product/update-product', product).map((response: Response) => response.json());
  }

  getAllProduct(){
    return this.http.get('/content-mng/product/get-all-product').map((response: Response) => response.json());
  }

  getProductCategories(){
    return this.http.get('/content-mng/product/get-product-categories').map((response: Response) => response.json());
  }
}

