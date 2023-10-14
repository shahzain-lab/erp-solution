import { ICustomer } from "@/interfaces/ICustomer.interface";
import { IOptional } from "../helper.interface";


export interface IAddSale {
    date: string,
    transactionType: 'sale',
    id?: string;
    paymentType: 'cash' | 'cheque';
    // customerid: string;
    customer?: ICustomer; // ICustomer
    billingName: IOptional<string>;
    billingMessage: IOptional<string>;
    moduleId: string;
    invoiceType: 'cash' | 'credit';
    balanceDue: string | number;
    items: ISaleItemRows[]; // IActualItem
    discount: string;
    discountToPKR: string | number;
    description: string;
    total: string | number;
}

export interface ISaleItemRows {
    itemid: string;
    itemName: string;
    quantity: string | number;
    unit: string | number;
    amount: string | number; 
}