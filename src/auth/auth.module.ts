import { Module } from '@nestjs/common';
import Password from './auth.password';
import Token from './auth.token';
import AuthService from './auth.service';

@Module({
  imports: [Password, Token],
  providers: [AuthService],
})
export class Auth {}
