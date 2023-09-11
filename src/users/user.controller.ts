import { Body, Controller, Get,  Param, Post, } from "@nestjs/common";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Get()
  getUser(): IUser[] {
    return this.userService.getUser()
  }

  @Get(':id')
  getUserId(@Param('id') id: string): IUser {
    return this.userService.getUserId(id)
  }

  @Post()
  createUser(@Body('user') user: IUser): IUser {
    return this.userService.createUser(user);
  }
}