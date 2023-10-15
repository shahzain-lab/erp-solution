import { IAddCustomer } from "@/app/interfaces/IAddParty.interface";
import { v4 as uuidv4 } from 'uuid';

export const customerFormEntries: IAddCustomer = {
    date: new Date().toISOString(),
    name: '',
    phoneNo: '',
    email: '',
    billingAddress: '' ,
    openedBalance: '12',
    creditDate: '28/07/2023',
    toPay: true,
    toReceive: false,
    limit: '',
    fields: [{text: ''}]
}
