import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * Takes in chargeId and returns customer info
 * 
 * @param {*} request 
 * @returns {
 *  "name": "Customer name"
 *  "email": "customer@mail.com"
 *  "address": "123 Street, Montreal, Canada, Quebec, H9P 1W9"
 * }
 * 
 */

export async function GET(request) {
    try {
        const url = new NextRequest(request);
        const params = url.nextUrl.searchParams;
        const chargeId = params.get("charge"); 
        const res = await fetch(`https://api.commerce.coinbase.com/charges/${chargeId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CC-Api-Key': process.env.COINBASE_KEY
            }
        }
        )

        const data = await res.json();
        const parsedData = JSON.parse(JSON.stringify(data));
        const customerInfo = parsedData.data.metadata

        return NextResponse.json(customerInfo, { status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}