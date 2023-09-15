import { Body, Controller, Get,  Param, Post, UsePipes, ValidationPipe, } from "@nestjs/common";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

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

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: CreateUserDto): IUser {
    return this.userService.createUser(user);
  }
}