import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { IUser } from "./user.interface";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { NotFoundUserException } from "./exceptions/not-found-user.exception";

@Injectable()
export class UserService{
  private users: IUser[] = []

  getUser(): IUser[] {
    return this.users
  }

  getUserId(id: number): IUser {
    const user = this.users.find(t => t.id === +id)
    if(!user) {
      throw new NotFoundUserException();
    }
    return user
  }
  
  createUser({user, tags, status}: CreateUserDto): IUser {
    const newUser = new User(user, tags, status)
    this.users.push(newUser);
    return newUser;
  }
}