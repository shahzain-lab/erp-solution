import { IOptional } from "../helper.interface";


export interface IAddPurchase {
    transactionid: string;
    // paymentType: 'cash' | 'credit';
    partyid: string;
    party: IOptional<string>; // ICustomer
    // billingName: IOptional<string>;
    // billingMessage: IOptional<string>;
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