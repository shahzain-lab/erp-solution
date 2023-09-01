import { IAddSale } from "@/app/interfaces/income/addSale.interface"
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
    // paymentType: "credit",
    partyid: uuidv4(),
    party: '', // ICustomer
    // billingName: '',
    // billingMessage: '',
    purchaseItemRows: [purchaseItemRow], 
    discount: '',
    discountToPKR: '',
    total: '',
    isPaying: false,
    paid: '',
    balance: ''
}
