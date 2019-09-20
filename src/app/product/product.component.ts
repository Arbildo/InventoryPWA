import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';


let params = [];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {
  }
  products = this.productService.getProductList(params);

  ngOnInit() {
  }

}
