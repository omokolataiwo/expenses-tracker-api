import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ExpensesModule } from './expenses/expenses.module';
import { config } from './bootstrap/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config, type: 'postgres' }),
    UsersModule,
    ExpensesModule,
  ],
})
export class AppModule {}
