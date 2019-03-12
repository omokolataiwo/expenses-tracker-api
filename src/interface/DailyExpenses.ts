import { IExpenses } from './Expenses';

export default interface IDailyExpenses{
  readonly date: string,
  readonly expenses: Array<IExpenses> 
}