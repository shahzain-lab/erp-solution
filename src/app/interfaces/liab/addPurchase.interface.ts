import { IOptional } from "../helper.interface";


export interface IAddPurchase {
    date: string;
    transactionType: 'purchase',
    transactionid: string;
    paymentType: 'cash' | 'cheque';
    balanceDue: string;
    partyid: string;
    party: string; // ICustomer
    purchaseItemRows: IPurchaseItemRows[]; // IActualItem
    discount: string;
    discountToPKR: string;
    total: string;
    isPaying: boolean;
    paid: string;
    balance: string;
}

export interface IPurchaseItemRows {
    itemid: string;
    itemName: string;
    quantity: string;
    unit: string;
    amount: string; 
}