import { IOptional } from "../helper.interface";


export interface IAddSale {
    transactionid: string;
    paymentType: 'cash' | 'credit';
    customerid: string;
    customer: IOptional<string>; // ICustomer
    billingName: IOptional<string>;
    billingMessage: IOptional<string>;
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