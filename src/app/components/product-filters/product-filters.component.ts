import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/products.mock';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent implements OnInit {
  @Input() brands: string[] = [];
  @Input() applicationTimes: string[] = [];
  @Input() maxPrice = 0;
  @Input() minPrice = 0;

  constructor() {}

  ngOnInit(): void {}
}
