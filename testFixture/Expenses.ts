import Expenses from '../src/classes/Expenses';

export const Food = new Expenses('Food', 3000);
export const Wine = new Expenses('Wine', 5000);
export const ExpensesList: Array<Expenses> = [Food, Wine];

