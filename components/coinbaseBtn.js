'use client'

import { useEffect, useState } from 'react';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import useCoinbaseCheckout from '@/utils/useCoinbaseCheckout';
import { useRouter } from 'next/navigation';

export default function CoinbaseBtn({ cart }) {
    const router = useRouter();

    const [coinbaseCheckoutId, setCoinbaseCheckoutId] = useState(null)
    const [completeCheckout, paymentData, checkoutId, error] = useCoinbaseCheckout();

    useEffect(() => {
        const createCheckout = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout`, {
                method: 'POST',
                body: JSON.stringify(cart)
            });
            const data = res;
            return data.json();
        }
        createCheckout().then((res) => setCoinbaseCheckoutId(res.data.id))
    }, [cart])

    useEffect(() => {
        if (paymentData) {
            const id = checkoutId;
            router.push(`/confirmation/${id}`);
        }
    }, [paymentData, router, checkoutId]);





    if (coinbaseCheckoutId) {
        return (
            <CoinbaseCommerceButton
                checkoutId={coinbaseCheckoutId}
                onChargeSuccess={async (e) => {
                    try {
                        await completeCheckout(e.code)
                    } catch (e) {
                        console.log(`Error: ${e} with ${e.code}`)
                    }

                }
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