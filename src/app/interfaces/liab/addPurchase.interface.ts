import { IOptional } from "../helper.interface";


export interface IAddPurchase {
    date: string;
    transactionType: 'purchase',
    transactionid: string;
    paymentType: 'cash' | 'cheque';
    balanceDue: number | string;
    partyid: string;
    party: string; // ICustomer
    purchaseItemRows: IPurchaseItemRows[]; // IActualItem
    discount: string;
    discountToPKR: number | string;
    total: number | string;
    isPaying: boolean;
    paid: string;
    balance: number | string;
}

export interface IPurchaseItemRows {
    itemid: string;
    itemName: string;
    quantity: number | string;
    unit: number | string;
    amount: number | string; 
}