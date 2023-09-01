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
    paymentType: "credit",
    customerid: uuidv4(),
    customer: '', // ICustomer
    billingName: '',
    billingMessage: '',
    saleItemRows: [saleItemRow], 
    discount: '',
    discountToPKR: '',
    total: ''
}
