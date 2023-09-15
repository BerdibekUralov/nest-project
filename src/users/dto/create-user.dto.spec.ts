import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "./create-user.dto";
import { validate } from "class-validator";
import { Status } from "../user.interface";

describe('create-user.dto', () => {
  let dto;
  beforeAll(() =>{
    dto = {
      user: '',
      tags: [],
      status: '',
    }
  })

  // User
  it('tags пустая', async () => {
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('user')).toBeTruthy();
  })
  it('user не пустая', async () => {
    dto.user = 'user';
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('user')).toBeFalsy();
  })

  // Tags
  it('user пустая', async () => {
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.length).toBe(0);
  })
  it('Выдаст ошибку не все элементы tags является строкой', async () => {
    dto.tags = ['tags', 1];
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.length).not.toBe(0);
    expect(dto.tags.every(el => typeof el === 'string')).not.toBeTruthy();
  })
  it('Каждый элемент tags является строкой и массив не пустой', async () => {
    dto.tags = ['tags', '1'];
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('tags')).toBeFalsy();
    expect(dto.tags.length).not.toBe(0);
  })

  // Status
  it('Тип статуса является значением enum status', async () => {
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('status')).toBeTruthy();
  })
  it('Тип статуса не является значением enum status', async () => {
    dto.status = 'status';
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('status')).toBeTruthy();
  })
  it('Тип статуса является значением enum status', async () => {
    dto.status = Status.ERROR;
    const ofImportDto = plainToInstance(CreateUserDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('status')).toBeFalsy();
    expect(dto.status).toBe('error')
  })
})