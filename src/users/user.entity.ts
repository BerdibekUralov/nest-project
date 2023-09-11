import { IUser } from "./user.interface";

export class User implements IUser {
  id: number;
  user: string;
  constructor(user: string) {
    this.user = user;
    this.id = new Date().getTime();
  }
}