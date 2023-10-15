
import { db } from '@/lib/drizzle';
import { purchase } from '@/lib/schema/purchase';
import { NextRequest, NextResponse } from 'next/server';
 

export async function GET(req: NextRequest) {
    try{
        const res = await db.query.purchase.findMany({
            with: {
                vendor: true
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
    try {
        const body = await req.json();
        console.log(body)
        const {date, vendorId, transactionType, moduleId, paymentType, discountRate, billingName, invoiceType, billingMessage, balanceDue, discountAmount, description, totalAmount, isPaying, paid, balance} = body
        const res = await db.insert(purchase).values({date, vendorId, transactionType, moduleId, paymentType, discountRate, billingName, invoiceType, billingMessage, balanceDue, discountAmount, description, totalAmount, isPaying, paid, balance}).returning();
        return NextResponse.json({message: 'inserted', res})
    } catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}
