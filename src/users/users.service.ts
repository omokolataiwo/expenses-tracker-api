import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './Users.entity';
import { Repository } from 'typeorm';
import { UserDto } from './User.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>) {}

  async createNewUser(user: UserDto): Promise<UserDto> {
    const userEntity: Users = this.userRepository.create(user);
    return await this.userRepository.save(userEntity);
  }
  async getUsers(): Promise<Array<UserDto>> {
    return await this.userRepository.find();
  }
}
