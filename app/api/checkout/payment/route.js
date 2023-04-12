import { NextResponse } from "next/server";
const swell = require('swell-node').init(process.env.SWELL_STORE_ID, process.env.SWELL_SECRET_KEY);


//Takes in an order payload and posts a payment to Swell

export async function POST(request){
    try{       
        const body = await request.json();
        const res = await swell.post('/payments', {
            amount: body.grand_total, 
            order_id: body.id,
            method: 'coinbase',
            account_id: body.account_id,
            charge_code: body.metadata.chargeCode,
            captured: true,
            authorized: true
        })
        const data = await res;
        return NextResponse.json({data}, {status: 200})

    } catch(e){
        return NextResponse.json({error: e.message}, {status: 500})
    }
}