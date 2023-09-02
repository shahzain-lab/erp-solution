

export interface IAddParty {
    date: string,
    partyId: string;
    partyName: string,
    phoneNo: string;
    address: IPartyAddress;
    creditDetails: ICreditDetails
    fields: {text: string}[]
}

export interface IPartyAddress {
    email: string;
    billingAddress: string;
    shippingAddress: string[]; 
}

export interface ICreditDetails {
    openedBalance: string;
    creditDate: string;
    toPay: boolean;
    toReceive: boolean;
    limit: string;
}