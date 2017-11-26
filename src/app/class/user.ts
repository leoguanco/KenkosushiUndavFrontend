export class User {
  constructor(
    public id:number,
    public username:string,
    public password:string,
    public lastLogin: Date,
    public isActive: Boolean,
    public name:string,
    public surname:string,
    public email:string,
    public observations:string) { }
}
