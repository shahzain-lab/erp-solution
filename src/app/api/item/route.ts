import { db } from "@/lib/drizzle";
import { item, stock } from "@/lib/schema/item";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try{
        const res = await db.query.item.findFirst({
            with: {
                stock: true
            }
        });
        console.log(res)
        return NextResponse.json({res})
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body)
    try{
        const _item = {
            code: body.code,
            name: body.name, 
            date: body.date, 
            category: body.category,
            quantity: Number(body.stock.openQty),  // WILL BE MEASURED BASED ON STORED STOCK
            salePrice: Number(body.pricing.salePrice),
        }
        const res = await db.insert(item).values({..._item}).returning()
        console.log('_item', res);
        
        const _stock = {
            openQty: body.stock.openQty,
            atPrice: body.stock.atPrice,
            asOfDate: body.stock.asOfDate,
            minStock: body.stock.minStock,
            location: body.stock.location,
            purchasePrice: body.pricing.purchasePrice,
            itemId: res[0]?.id
        }
        const storeStock = await db.insert(stock).values({..._stock}).returning()
        console.log('_stock', storeStock);
        return NextResponse.json({item: res, stock: storeStock});
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}