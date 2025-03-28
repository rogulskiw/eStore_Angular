import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesStoreItem } from './home/services/category/categories.storeItems';
import { CategoryService } from './home/services/category/category.service';
import { ProductsStoreItem } from './home/services/product/products.storeItem';
import { ProductsService } from './home/services/product/products.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule, 
    HttpClientModule, 
  ],
  providers: [CategoriesStoreItem, CategoryService, ProductsStoreItem, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
