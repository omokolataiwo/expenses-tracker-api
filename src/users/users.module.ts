import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './Users.entity';

@Module({
  controllers: [
    UsersController
  ],
  providers: [
    UsersService
  ],
  imports: [TypeOrmModule.forFeature([Users])]
})
export class UsersModule {}