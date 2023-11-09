import { ProductService } from './../servies/product.service';
import { Product } from './../type/product';
import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product[] = []

  constructor(p: ProductService){
     this.product = p.getAllProduct();
  }
}
