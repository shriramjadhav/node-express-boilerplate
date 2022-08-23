/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException } from './http-exception';
import { HttpStatus } from '../http-service/http-service.constants';

export class BadRequestException extends HttpException {
  constructor(message?: string, details?: any) {
    super({
      status: HttpStatus.BAD_REQUEST,
      message: message || 'Bad Request',
      details,
    });

    this.name = 'Bad Request';
  }
}
