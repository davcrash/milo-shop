import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  filters = {
    brand: '',
    applicationTime: '',
    minPrice: 0,
    maxPrice: 0,
  };

  @Output() filterEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  changeFilters() {
    this.filterEvent.emit(this.filters);
  }
}
