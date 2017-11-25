export class Product {
  constructor(
    public id:number,
    public name:string,
    public type:string,
    public image: string,
    public description: string,
    public price: number,
    public marketable: Boolean,
    public amountPeople: number) { }
}
