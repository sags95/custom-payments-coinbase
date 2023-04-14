'use client'

import swell from 'swell-js'
import { useEffect, useState } from 'react';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import UseCheckout from '@/utils/UseCheckout';
import { useRouter } from 'next/navigation';

export default function CoinbaseBtn({ cart }) {
    const router = useRouter();
 
    const [checkoutId, setCheckoutId] = useState(null)

    useEffect(() => {
        console.log(cart);
        const createCheckout = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout`, {
                method: 'POST',
                body: JSON.stringify(cart)
            });
            const data = res;
            return data.json();
        }
        createCheckout().then((res) => setCheckoutId(res.data.id))
    }, [])





    if (checkoutId) {
        return (
            <CoinbaseCommerceButton
                checkoutId={checkoutId}
           
               
                onChargeSuccess={((e) => {
                    UseCheckout(e.code).then(() => {
                            //Navigate to order confirmation
                            router.push('/confirmation')
                    })
                })
                }

                onChargeFailure={((msg) => {
                    console.log(`Error: ${msg} with code: ${msg.code}`)

                })}
            />

        )
    } else {
        return (
            <>
            </>
        )
    }
}