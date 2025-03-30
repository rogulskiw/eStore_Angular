import { Component, OnInit } from '@angular/core';
import { ProductsService } from './components/products/products.service';
import { products } from './components/products/products.data';
import { ProductListItem } from './components/products/products.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductListItem[] = [];
  selectedCategory: string | null = null;

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(category?: string) {
    this.selectedCategory = category || null;
    this.products = this.productService.getProducts(category);
  }
}
