import {User} from "./user";

export class Address {
  constructor(
    public id: number,
    public address: string,
    public floor: string,
    public office: string,
    public typeAddress: string,
    public userId: User) { }
}
