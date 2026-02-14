export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  { id: 1, name: "Laptop", price: 3999.99, category: "Electronics" },
  { id: 2, name: "Headphones", price: 299.99, category: "Electronics" },
  { id: 3, name: "Coffee Mug", price: 29.99, category: "Home" },
  { id: 4, name: "Notebook", price: 14.99, category: "Office" },
];