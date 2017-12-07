export class Product {
  public id: number;
  public name: string;
  public type: string;
  public image: string;
  public description: string;
  public price: number;
  public marketable: boolean;
  public amountPeople: number;
  constructor() {
    this.id = 1;
    this.name = '';
    this.type = '';
    this.image = '';
    this.description = '';
    this.price = null;
    this.marketable = false;
    this.amountPeople = null;
  }
}
