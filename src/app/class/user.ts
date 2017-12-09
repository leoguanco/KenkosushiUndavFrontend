import { DatePipe } from '@angular/common';

export class User {
  public id: number;
  public username: string;
  public password: string;
  public lastLogin: DatePipe;
  public isActive: boolean;
  public name: string;
  public surname: string;
  public email: string;
  public observations: string;
  constructor() {
    this.id = 1;
    this.username = '';
    this.password = '';
    this.lastLogin = null;
    this.isActive = true;
    this.name = '';
    this.surname = '';
    this.email = '';
    this.observations = '';
  }
}
