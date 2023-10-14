import { IAddSale } from "@/app/interfaces/income/addSale.interface"
import { v4 as uuidv4 } from 'uuid';

export const saleItemRow = {
    itemid: uuidv4(),
    itemName: '',
    quantity: '',
    unit: '',
    amount: ''   
}


export const initAddSale: IAddSale = {
    date: new Date().toISOString(),
    transactionType: 'sale',
    paymentType: "cash",
    // customer: , // ICustomer
    items: [saleItemRow], // item 
    moduleId: uuidv4(),
    discountToPKR: '',
    discount: '',
    billingName: '',
    invoiceType: 'credit',
    billingMessage: '',
    balanceDue: '',
    description: '',
    total: ''
}
