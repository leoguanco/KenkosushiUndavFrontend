import {User} from "./user";

export class Phone {
  constructor(
    public id:number,
    public phone:number,
    public typePhone:string,
    public user: User) { }

}
