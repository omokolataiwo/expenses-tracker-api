import { Controller, Get } from '@nestjs/common';

@Controller('expenses')
export class ExpensesController {
  @Get()
  getAllExpenses(): Array<any> {
    return [{title: 'Cloths', amount: 200}];
  }
}