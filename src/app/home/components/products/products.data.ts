import { race } from 'rxjs';
import { ProductListItem } from './products.type';



export const products: ProductListItem[] = [
  {
    id: 1,
    product_name: 'Jacket',
    product_img: 'shop-1',
    price: 100,
    ratings: 4.5,
    product_description: 'Perfect jacket for autumn',
    category_id: 5,
  },
  {
    id: 2,
    product_name: 'Purse',
    product_img: 'shop-2',
    price: 25,
    ratings: 3,
    product_description: "leather purse",
    category_id: 7
  },
  {
    id: 3,
    product_name: 'Dress',
    product_img: 'shop-3',
    price: 45,
    ratings: 4,
    product_description: "Beautiful spring dress",
    category_id: 5
  },
  {
    id: 4,
    product_name: 'Denim Jeans',
    product_img: 'shop-4',
    price: 50,
    ratings: 3.5,
    product_description: 'Denim jeans',
    category_id: 4
  },
  {
    id: 5,
    product_name: 'Laced Boots',
    product_img: 'shop-5',
    price: 65,
    ratings: 2,
    product_description: 'Premium leather boots',
    category_id: 6
  },
  {
    id: 6,
    product_name: 'Back pack',
    product_img: 'shop-6',
    price: 20,
    ratings: 5,
    product_description: 'Spacious back pack',
    category_id: 7
  },
  {
    id: 7,
    product_name: 'Earrings',
    product_img: 'shop-7',
    price: 10,
    ratings: 4.5,
    product_description: 'Beaurigul ear rings',
    category_id: 7
  },
  {
    id: 8,
    product_name: 'Scarf',
    product_img: 'shop-8',
    price: 25,
    ratings: 4,
    product_description: "Designer scarf", 
    category_id: 7
  },
  {
    id: 9,
    product_name: 'Boots',
    product_img: 'shop-9',
    price: 70,
    ratings: 3,
    product_description: "High leather boots",
    category_id: 6
  },

];


