import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/products.mock';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent implements OnInit {
  @Input() products: Product[] = [];

  brands: string[] = [];
  applicationTimes: string[] = [];
  maxPrice = 0;
  minPrice = 0;

  constructor() {}

  ngOnInit(): void {
    this.getBrands();
    this.getApplicationTimes();
    this.getPrices();
  }

  getBrands(): void {
    this.brands = [...new Set(this.products.map((product) => product.brand))];
  }

  getApplicationTimes(): void {
    this.applicationTimes = [
      ...new Set(this.products.map((product) => product.applicationTime)),
    ];
  }

  getPrices(): void {
    const prices = this.products.map((p) => {
      return p.price;
    });
    this.maxPrice = Math.max(...prices);
    this.minPrice = Math.min(...prices);
  }
}
