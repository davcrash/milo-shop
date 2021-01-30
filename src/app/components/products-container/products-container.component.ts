import { Component, Input, OnInit } from '@angular/core';
import products, { CareType, Product } from 'src/app/mock/products.mock';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit {
  @Input() careType: CareType = CareType.facial;

  productsList: Product[] = [];
  brands: string[] = [];
  applicationTimes: string[] = [];
  maxPrice = 0;
  minPrice = 0;

  productsFiltered: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getApplicationTimes();
    this.getPrices();
  }

  getProducts(): void {
    this.productsList = products.filter(
      (product) => product.careType === this.careType
    );
    this.productsFiltered = this.productsList;
  }

  getBrands(): void {
    this.brands = [
      ...new Set(this.productsList.map((product) => product.brand)),
    ];
  }

  getApplicationTimes(): void {
    this.applicationTimes = [
      ...new Set(this.productsList.map((product) => product.applicationTime)),
    ];
  }

  getPrices(): void {
    const prices = this.productsList.map((p) => {
      return p.price;
    });
    this.maxPrice = Math.max(...prices);
    this.minPrice = Math.min(...prices);
  }

  filterProducts(
    brand?: string,
    applicationTime?: string,
    minPrice?: number,
    maxPrice?: number
  ) {
    let filtered: Product[] = [];

    if (brand) {
      const currentFilteredProducts = this.getCurrentFilteredProducts(filtered);
      filtered = currentFilteredProducts.filter((product) => {
        return product.brand === brand;
      });
    }

    if (applicationTime) {
      const currentFilteredProducts = this.getCurrentFilteredProducts(filtered);
      filtered = currentFilteredProducts.filter((product) => {
        return product.brand === brand;
      });
    }

    if (minPrice && maxPrice) {
      const currentFilteredProducts = this.getCurrentFilteredProducts(filtered);
      filtered = currentFilteredProducts.filter((product) => {
        return product.brand === brand;
      });
    }

    this.productsFiltered = filtered;
  }

  getCurrentFilteredProducts(filtered: Product[]): Product[] {
    return filtered.length === 0 ? this.productsList : filtered;
  }
}
