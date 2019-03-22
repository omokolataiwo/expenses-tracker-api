import { Controller, Get, Post, Body} from '@nestjs/common';
import { UserDto } from './User.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }
  
  @Get()
  getAllUsers(): Promise<Array<UserDto>> {
    return this.userService.getUsers();
  }
  @Post()
  createUser(@Body() userDto: UserDto) {
    return this.userService.createNewUser(userDto);
  }
}