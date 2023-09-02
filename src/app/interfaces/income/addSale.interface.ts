import { IOptional } from "../helper.interface";


export interface IAddSale {
    date: string,
    transactionType: 'sale',
    transactionid: string;
    paymentType: 'cash' | 'cheque';
    customerid: string;
    customer: string; // ICustomer
    billingName: IOptional<string>;
    billingMessage: IOptional<string>;
    invoiceType: 'cash' | 'credit';
    balanceDue: string;
    saleItemRows: ISaleItemRows[]; // IActualItem
    discount: string;
    discountToPKR: string;
    total: string;
}

export interface ISaleItemRows {
    itemid: string;
    itemName: string;
    quantity: string;
    unit: string;
    amount: string; 
}