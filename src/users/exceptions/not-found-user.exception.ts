import { HttpStatus, HttpException  } from '@nestjs/common';

interface Error {
  message?: never;
  error?: never;
  createdAt?: never;
  [k: string]: string;
}

export class NotFoundUserException extends HttpException {
  constructor(error: Error = null) {
    super({
      message: 'User не была найдена',
      error: 'not_found_user_exception',
      createdAt: new Date(),
      ...error
    }, HttpStatus.NOT_FOUND);
  }
}