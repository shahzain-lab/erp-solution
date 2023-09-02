import { IAddExpense } from "@/app/interfaces/expense/addExpense.interface";
import { IAddPurchase } from "@/app/interfaces/liab/addPurchase.interface";
import { v4 as uuidv4 } from 'uuid';

export const expenseItemRow = {
    itemid: uuidv4(),
    itemName: '',
    quantity: '',
    unit: '',
    amount: ''   
}


export const expenseFormEntries: IAddExpense = {
    date: new Date().toISOString(),
    transactionType: 'expense',
    transactionid: uuidv4(),
    paymentType: "cash",
    category: '', // category
    expenseItemRows: [expenseItemRow], //item 
    total: '',
    balance: ''
}
