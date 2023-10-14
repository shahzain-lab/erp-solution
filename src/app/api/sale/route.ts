
import { db } from '@/lib/drizzle';
import { sales } from '@/lib/schema/sale';
import { NextRequest, NextResponse } from 'next/server';
 

export async function GET(req: NextRequest) {
    try{
        const res = await db.query.sales.findMany();
        console.log(res)
        return NextResponse.json({res})
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}

export async function POST(req: NextRequest) {
    try {
        const res = await db.insert(sales).values({date: new Date().toISOString(), paymentType: 'cash', transactionType: 'sale', customerId: 3, moduleId: 'H1P2' }).returning();
        return NextResponse.json({message: 'inserted', res})
    } catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}