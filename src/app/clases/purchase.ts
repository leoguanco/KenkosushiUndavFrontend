import {User} from "./user";
import {Promotion} from "./promotion";

export class Purchase {
  constructor(
    public id:number,
    public typeDelivery:string,
    public timeDelivery:string,
    public observations: string,
    public user:User,
    public promotion:Promotion) { }
}
