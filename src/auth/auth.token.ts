import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserDto } from '../users/User.dto';

@Injectable()
export default class Token {
  private readonly SECRET_KEY: string;

  constructor() {
    this.SECRET_KEY = process.env.SECRET_KEY || '';
  }

  sign(data: UserDto): string {
    if (!this.SECRET_KEY.length) {
      throw new Error('Secret key not provided.');
    }
    return jwt.sign(data, this.SECRET_KEY, { expiresIn: '2d' });
  }
  verify(token: string): boolean {
    return jwt.verify(token, this.SECRET_KEY);
  }
}
