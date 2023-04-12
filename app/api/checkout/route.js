import { NextRequest, NextResponse } from 'next/server';

//Takes in a cart and creates a Coinbase checkout session


export async function POST(request) {
    try {
    const body = await request.json();
    const res = await fetch("https://api.commerce.coinbase.com/checkouts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'X-CC-Api-Key': process.env.COINBASE_KEY
        },
        body: JSON.stringify({
            name: 'Checkout',
            description: 'Your order',
            pricing_type: 'fixed_price',
            local_price: {
                amount: body.grand_total,
                currency: 'USD'
            },
            redirect_url: 'http://localhost:3000/confirmation',
            requested_info: ['name', 'email']
        })
    }
     
    )

    const data = await res.json();
    return NextResponse.json(data, {status: 200});
} catch (e){
    return NextResponse.json({error: e.message}, {status: 500})
}
}