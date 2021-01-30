import { Component, Input, OnInit } from '@angular/core';
import products, { CareType, Product } from 'src/app/mock/products.mock';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit {
  @Input() careType: CareType = CareType.facial;
  productsList?: Product[];

  constructor() {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsList = products.filter(
      (product) => product.careType === this.careType
    );
  }
}
