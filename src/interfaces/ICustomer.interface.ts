

export interface ICustomer {
    id: string; // Unique identifier for the customer
    name: string; // Customer's name
    email: string; // Customer's email address
    phone: string; // Customer's phone number
    address: ICustomerAddress
    creditDetails: ICusotmerCredits
    fields: {text: string}[]
    balance: number; // Current balance of the customer
    credits: number; // Total credits applied to the customer's account
  }

  interface ICustomerAddress {
    email: string
    billingAddress: string
    shippingAddress: string[] 
  }

  interface ICusotmerCredits {
    openedBalance: number
    creditDate: string
    toPay: boolean
    toReceive: boolean
    limit: number
  }