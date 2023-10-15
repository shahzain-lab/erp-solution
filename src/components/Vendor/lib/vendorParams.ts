import { IAddParty } from "@/app/interfaces/IAddParty.interface";
import { v4 as uuidv4 } from 'uuid';

export const partyFormEntries: IAddParty = {
    date: new Date().toISOString(),
    partyId: uuidv4(),
    partyName: '',
    phoneNo: '',
    address: {
        email: '',
        billingAddress: '' ,
        shippingAddress: [], 
    },
    creditDetails: {
      openedBalance: '12',
      creditDate: '28/07/2023',
      toPay: true,
      toReceive: false,
      limit: ''
    },
    fields: [{text: ''}]
}
