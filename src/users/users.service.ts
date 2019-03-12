import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './Users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // constructor(
  //   // @InjectRepository(Users)
  //   // private readonly userRepository: Repository<Users>) {}

  // async createUser(user: CreateUserDto): Promise<Users> {
  //   // const userEntity: Users = this.userRepository.create(user);
  //   // return await this.userRepository.save(userEntity);
  // }
  // async getUsers(): Promise<Array<CreateUserDto>> {
  //   // return await this.userRepository.find();
  // }
}
