import { Injectable, BadRequestException } from "@nestjs/common";
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
    const user = this.users.find(user => user.id === +id)
    if(!user) {
      throw new NotFoundUserException();
    }
    return user
  }
  
  createUser({user, email, tags, status}: CreateUserDto): IUser {
    const newUser = new User(user, email, tags, status)
    this.users.push(newUser);
    return newUser;
  }

  getUserByEmail(email: string): IUser[] {
    const users = this.users.filter(user => user.email === email);
    if(!users || users.length === 0) {
      throw new BadRequestException('User не была найдена')
    }

    return users
  }
}