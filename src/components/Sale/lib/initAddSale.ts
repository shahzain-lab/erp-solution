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
    transactionid: uuidv4(),
    date: new Date().toISOString(),
    transactionType: 'sale',
    paymentType: "cash",
    customerid: uuidv4(),
    customer: '', // ICustomer
    billingName: '',
    invoiceType: 'credit',
    billingMessage: '',
    balanceDue: '',
    saleItemRows: [saleItemRow], // item 
    discount: '',
    discountToPKR: '',
    total: ''
}
