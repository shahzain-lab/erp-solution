import { db } from "@/lib/drizzle";
import { customer } from "@/lib/schema/customer";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try{
        const res = await db.select().from(customer);
        // const res = await db.query.customer.findMany();
        console.log(res)
        return NextResponse.json({res})
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}

export async function POST(req: NextRequest) {
    try{
        const res = await db.insert(customer).values({name: 'Zain', email: 'shah@gmail.com', phone: 'sdsd'}).returning()
        console.log('customer', res);
        return NextResponse.json({res});
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}