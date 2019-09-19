import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://127.0.0.1:8000/tbl/producto/';

  constructor(private  httpClient: HttpClient) {
  }

  private products: Product[] = [];

  public getProductList() {
      return this.httpClient.get(this.baseUrl).subscribe((result: Product[]) => result.forEach((x) => {
      this.products.push(x);
    }));
  }
}
