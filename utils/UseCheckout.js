import { useRouter } from 'next/navigation';


export default async function UseCheckout(chargeCode) {

    try {
        const router = useRouter();

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

        //Navigate to order confirmation
        router.replace('/confirmation')

    } catch (e) {
        console.log(e)

    }
}
