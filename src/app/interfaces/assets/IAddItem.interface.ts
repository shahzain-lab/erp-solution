

export interface IAddItem {
    date: string,
    name: string;
    itemId: string,
    category: string; //string
    code: number;
    pricing: IPricing;
    stock: IStock;
}

export interface IPricing {
    salePrice: string;
    purchasePrice: string;
    wholeSalePrice: {
        quantity: number;
        price: string;
    }
}

export interface IStock {
    openQty: string,
    atPrice: string,
    asOfDate: string,
    minStock: number,
    location: string
}