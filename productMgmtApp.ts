import { printProducts } from "./methods";
import Product from "./product";

function main() {
  const products: Product[] = [];
  const product1 = new Product(3128874119, "Banana", "2023-01-24", 0.55, 10);
  const product2 = new Product(2927458265, "Apple", "2023-01-24", 1.09, 124);
  const product3 = new Product(9189927460, "Carrot", "2023-01-24", 2.99, 89);
  products.push(product1);
  products.push(product2);
  products.push(product3);
  products.sort((a, b) => b.getUnitPrice() - a.getUnitPrice());
  printProducts(products);
}

main();
