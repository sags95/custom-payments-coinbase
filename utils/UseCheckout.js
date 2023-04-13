

export default async function UseCheckout(chargeCode) {

    try {
        

        //Call API to fetch Coinbase checkout details to populate cart
        const customerData = await fetch(`${process.env.HOST}/api/checkout/details?charge=${chargeCode}`);
        const res = await customerData.json();
        console.log(res)

        //Update cart with customer info
        const update = await swell.cart.update({
            account: {
                email: res.email
            },
            billing: {
                method: 'coinbase'
            },
            metadata: {
                chargeCode: chargeCode
            }
        });
        console.log(update)

        //Post order
        const order = await swell.cart.submitOrder();
        console.log(order)

        //Post payment
        const payment = await fetch(`${process.env.HOST}/api/checkout/payment`, {
            method: 'POST',
            body: JSON.stringify(order)
        })

        const paymentData = await payment.json()
        console.log(paymentData)

        return paymentData;

    

    } catch (e) {
        console.log(e)

    }
}
