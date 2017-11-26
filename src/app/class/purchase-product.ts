import {Purchase} from "./purchase";
import {Product} from "./product";

export class PurchaseProduct {
  constructor(
    public id:number,
    public purchase:Purchase,
    public product:Product,
    public cant: number) { }
}
