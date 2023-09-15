import { ArrayNotEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Status } from "../user.interface";

export class CreateUserDto {
  @IsString({message: 'Название обязательно'})
  @IsNotEmpty({message: 'Название обязательно'})
  user: string;

  @ArrayNotEmpty({message: 'Необходимо указать теги'})
  @IsString({each: true, message: 'Теги должга быть строчными'})
  tags?: string[];

  @IsOptional()
  @IsEnum(Status, {message: 'Не верный тип статуса'})
  status?: Status;
}