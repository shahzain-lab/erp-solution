

export interface IAddItem {
    date: string,
    itemName: string;
    itemId: string,
    category: string; //string
    itemCode: number;
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