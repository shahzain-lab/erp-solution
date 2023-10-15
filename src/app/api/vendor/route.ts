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
    const body = await req.json();
    try{
        const res = await db.insert(vendor).values({...body, phone: body.phoneNo}).returning()
        console.log('customer', res);
        return NextResponse.json({res});
    }catch(err) {
        console.log(err)
        return NextResponse.json({err})
    }
}