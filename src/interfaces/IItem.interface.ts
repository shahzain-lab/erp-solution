

export interface IItems {
    id: string
    date: string
    itemName: string
    category: string
    itemCode: number
    pricing: IItemPricing
    stock: IItemStock
  }

  interface IItemPricing {
    salePrice: number;
    purchasePrice: number;
    wholeSalePrice: {
        quantity: number
        price: number
    }
  }

  interface IItemStock {
    openQty: number;
    atPrice: number;
    asOfDate: string;
    minStock: number
    location: string
  }