import { Component, Input, Output } from '@angular/core';
import { Product } from '../../types/product';

@Component({
  selector: 'app-card',
  imports: [],

  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() productsItems!: Product[];
  stars: number[] = [1, 2, 3, 4, 5];
}
