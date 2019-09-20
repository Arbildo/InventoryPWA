import {Injectable} from '@angular/core';
import {Product} from './product';
import {RestService} from "../rest.service";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl = 'http://127.0.0.1:8000/tbl/producto/';
  result = [];
  constructor(private restService: RestService) {
    this.restService = restService;
  }

    public getProductList(params) {
    console.log("si llego")
     this.restService.get<Product[]>({
      url: this.baseUrl,
    }).then(function (response) {
       console.log(response)
      return response;
     }).catch(function (error) {
      console.log(error);
    }).finally(function () {
      console.log("finalizo")
    });
  }


}
