import { Component } from '@angular/core';
import data from '../../products.json';
import { CardComponent } from './card/card.component';
import { Product } from '../types/product';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = data.products;
  constructor() {
    console.log(this.products[0]);
  }
}
