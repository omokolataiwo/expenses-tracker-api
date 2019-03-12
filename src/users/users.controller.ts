import { Controller, Get } from '@nestjs/common';
// import { UserDto } from './User.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): Array<any> {
    return [{username: 'Na', password: '123', name: 'Natheniel Bassey'}];
  }
}