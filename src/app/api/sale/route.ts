
import { db } from '@/lib/drizzle';
import { sales } from '@/lib/schema/sale';
import { NextRequest, NextResponse } from 'next/server';
 

export async function GET(req: NextRequest) {
    try{
        const res = await db.query.sales.findMany({
            with: {
                customer: true
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
        const {date, paymentType, transactionType, customerId, moduleId, balanceDue, billingMessage, billingName, description, discount, discountToPKR, invoiceType, total} = body
        const res = await db.insert(sales).values({date, paymentType, transactionType, customerId, moduleId, balanceDue, billingMessage, billingName, description, discount, discountToPKR, invoiceType, total}).returning();
        return NextResponse.json({message: 'inserted', res})
    } catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}
