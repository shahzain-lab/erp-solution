import { db } from "@/lib/drizzle";
import { vendor } from "@/lib/schema/vendor";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try{
        const res = await db.query.vendor.findFirst();
        console.log(res)
        return NextResponse.json({res})
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}

export async function POST(req: NextRequest) {
    try{
        const res = await db.insert(vendor).values({name: 'zain', email: 'zain@gmail.com', phone: '02389283', balance: 28322, credits: 37846}).returning()
        console.log('customer', res);
        return NextResponse.json({res});
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}