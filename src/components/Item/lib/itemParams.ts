
import { IAddItem } from "@/app/interfaces/assets/IAddItem.interface";
import { v4 as uuidv4 } from 'uuid';

export const itemFormEntries: IAddItem = {
    date: new Date().toISOString(),
    name: '',
    itemId: uuidv4(),
    category: '',
    code: 233,
    pricing: {
        salePrice: '',
        purchasePrice: '',
        wholeSalePrice: {
            quantity: 1,
            price: ''
        }
    },
    stock: {
        openQty: '',
        atPrice: '23000',
        asOfDate: '28/09/2023',
        minStock: 10,
        location: ''
    }
}
