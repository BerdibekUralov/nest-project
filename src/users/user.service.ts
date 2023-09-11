import { Injectable } from "@nestjs/common";
import { IUser } from "./user.interface";

@Injectable()
export class UserService{
  private users: IUser[] = [
    {id: 1, user: 'Anvar Kim'},
    {id: 2, user: 'John Deo'},
  ]

  getUser(): IUser[] {
    return this.users
  }

  getUserId(id: string): IUser {
    const user = this.users.find(t => t.id === +id)
    return user
  }
  
  createUser(user: IUser): IUser {
    this.users.push(user);
    return user;
  }
}