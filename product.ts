import { json } from "stream/consumers";

// interface ProductType = {
//   id: number;
//   name: string;
//   dateSupplied: Date;
//   unitPrice: number;
//   quantityInStock: number;
// };

export default class Product {
  private id: number;
  private name: string;
  private dateSupplied: string;
  private unitPrice: number;
  private quantityInStock: number;

  constructor(id: number, name: string, dateSupplied: string, unitPrice: number, quantityInStock: number) {
    this.id = id;
    this.name = name;
    this.dateSupplied = dateSupplied;
    this.unitPrice = unitPrice;
    this.quantityInStock = quantityInStock;
  }

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getDateSupplied(): string {
    return this.dateSupplied;
  }
  getUnitPrice(): number {
    return this.unitPrice;
  }
  getQuantityInStock(): number {
    return this.quantityInStock;
  }
  setId(id: number): void {
    this.id = id;
  }
  setName(name: string): void {
    this.name = name;
  }
  setDateSupplied(dateSupplied: string): void {
    this.dateSupplied = dateSupplied;
  }
  setUnitPrice(unitPrice: number): void {
    this.unitPrice = unitPrice;
  }
  setQuantityInStock(quantityInStock: number): void {
    this.quantityInStock = quantityInStock;
  }
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      dateSupplied: this.dateSupplied,
      unitPrice: this.unitPrice,
      quantityInStock: this.quantityInStock,
    };
  }

  // orderByUnitPrice(a: Product, b: Product): number {}
}
