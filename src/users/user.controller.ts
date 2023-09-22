import { Body, Controller, Get,  Param, Post, UsePipes, ValidationPipe, ParseIntPipe } from "@nestjs/common";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { EmailPipe } from "./pipes/email.pipe";

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Get()
  getUser(): IUser[] {
    return this.userService.getUser()
  }

  @Get(':id')
  getUserId(@Param('id', ParseIntPipe) id: number): IUser {
    return this.userService.getUserId(id)
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: CreateUserDto): IUser {
    return this.userService.createUser(user);
  }

  @Get('email/:email')
  getUserByEmail(@Param('email', EmailPipe) email: string): IUser[] {
    return this.userService.getUserByEmail(email)
  }
}