import { IAddPurchase } from "@/app/interfaces/liab/addPurchase.interface";
import { v4 as uuidv4 } from 'uuid';

export const purchaseItemRow = {
    itemid: uuidv4(),
    itemName: '',
    quantity: '',
    unit: '',
    amount: ''   
}


export const purchaseFormEntries: IAddPurchase = {
    transactionid: uuidv4(),
    date: new Date().toISOString(),
    paymentType: "cash",
    transactionType: 'purchase',
    partyid: uuidv4(),
    party: '', // ICustomer
    balanceDue: '',
    purchaseItemRows: [purchaseItemRow], //item 
    discount: '',
    discountToPKR: '',
    total: '',
    isPaying: false,
    paid: '',
    balance: ''
}
