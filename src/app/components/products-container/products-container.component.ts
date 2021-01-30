import { Component, Input, OnInit } from '@angular/core';
import { CareType } from 'src/app/mock/products.mock';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit {
  @Input() careType: CareType = CareType.facial;

  constructor() {}

  ngOnInit(): void {
    console.log(this.careType);
  }
}
