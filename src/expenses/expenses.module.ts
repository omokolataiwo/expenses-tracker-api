import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { Users } from '../users/Users.entity';

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService],
  imports: [TypeOrmModule.forFeature([Users])]
})
export class ExpensesModule {}
