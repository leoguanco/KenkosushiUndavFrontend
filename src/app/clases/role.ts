import {User} from "./user";

export class Role {
  constructor(
    public id:number,
    public role:string,
    public user: User) { }
}
