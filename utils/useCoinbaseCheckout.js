

import { useState } from 'react';
import { useCartActions } from './cartContext';


export default function useCoinbaseCheckout() {
  const { checkout, updateCart } = useCartActions();
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);
  const [checkoutId, setCheckoutId] = useState(null);

  const completeCheckout = async (chargeCode) => {
    try {
      const customerData = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout/details?charge=${chargeCode}`);
      const res = await customerData.json();
      console.log(res);

      const update = await updateCart({
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
      console.log(update);

      setCheckoutId(update.checkout_id);

      const order = await checkout();
      console.log(order);

      const payment = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout/payment`, {
        method: 'POST',
        body: JSON.stringify(order)
      });

      const paymentDataResponse = await payment.json();
      console.log(paymentDataResponse);

      setPaymentData(paymentDataResponse);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  return [completeCheckout, paymentData, checkoutId, error];
}
