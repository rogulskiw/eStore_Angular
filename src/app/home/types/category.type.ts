export interface Category{
    id: number; 
    category: string; 
    parent_category_id?: number; //this field is optional because of "?"
}