'use client'

import { useEffect, useState } from 'react';
import { CoinbaseCommerceButton } from '@iofate/react-coinbase-commerce';
import '@iofate/react-coinbase-commerce/dist/esm/index.css';
import useCoinbaseCheckout from '@/utils/useCoinbaseCheckout';
import { useRouter } from 'next/navigation';

export default function CoinbaseBtn({ cart }) {
    const router = useRouter();

    const [coinbaseCheckoutId, setCoinbaseCheckoutId] = useState(null)
    const [completeCheckout, paymentData, checkoutId, error] = useCoinbaseCheckout(router);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const createCheckout = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout`, {
                method: 'POST',
                body: JSON.stringify(cart)
            });
            const data = res;
            return data.json();
        }
        createCheckout().then((res) => {
            setCoinbaseCheckoutId(res.data.id);
            setIsLoading(false);
        })
    }, [cart])

    function Spinner() {
        return (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )
      }
      


    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Spinner/>
                <span>Loading...</span>
            </div>
        )
    } else if (coinbaseCheckoutId) {
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
        return null;
    }
}