import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/product/products.storeItem';
import { Product } from '../../types/products.type';
import { CartStoreItem } from '../../services/cart/cart.storeItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], 
})
export class ProductsComponent {

  constructor(public productStore: ProductsStoreItem, private cart: CartStoreItem){}

  addToCart(product: Product){
    this.cart.addProduct(product);
  }

}
