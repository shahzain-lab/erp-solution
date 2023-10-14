import { ICustomer } from "./ICustomer.interface";
import { IItems } from "./IItem.interface";

enum PaymentType {
    CASH = 'CASH',
    CHEQUE = 'CHEQUE'
}

enum InvoiceType {
    CASH = 'CASH',
    CREDIT = 'CREDIT'
}

enum TransactionType {
    SALE = 'SALE',
    PURCHASE = 'PURCHASE',
    EXPENSE = 'EXPENSE'
}

// Define the Sale schema
export interface Sale {
    id: string; // Unique identifier for the sale
    date: Date; // Date of the sale
    customer: ICustomer; // Customer or client involved in the sale
    items: IItems[]; // List of products sold in this transaction
    transactionType: TransactionType;
    moduleId: string; // H1P1 = head 1 pillar 1
    paymentType: PaymentType;
    discountRate: number;
    billingName: string,
    invoiceType: InvoiceType,
    billingMessage: string,
    balanceDue: number,
    discountAmount: number;
    description: string;
    totalAmount: number; // Total amount of the sale
   }