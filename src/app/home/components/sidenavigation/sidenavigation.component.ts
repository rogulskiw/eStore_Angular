import { Component, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent {
  categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getAllCategories();
  }

  selectCategory(category: number){
    this.categorySelected.emit(category);
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId 
    );
  }

}
