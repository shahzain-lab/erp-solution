import { IOptional } from "../helper.interface";


export interface IAddExpense {
    date: string,
    transactionType: 'expense',
    transactionid: string;
    paymentType: 'cash' | 'cheque';
    category: string; // ICustomer
    balance: string;
    expenseItemRows: IExpenseItemRows[]; // IActualItem
    total: string;
}

export interface IExpenseItemRows {
    itemid: string;
    itemName: string;
    quantity: string;
    unit: string;
    amount: string; 
}