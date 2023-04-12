'use client'

import { useEffect, useState } from "react"
import swell from 'swell-js'
import ProductListItem from "@/components/productListItem";
import CoinbaseBtn from "@/components/coinbaseBtn";

export default function Cart({ checkoutId }) {
    const [cart, setCart] = useState({
        isLoaded: false,
        isEmpty: false,
        cartData: {}
    });

    useEffect(() => {
        const getCart = async () => {
            const res = await swell.cart.get();
            if (res != null) {
                setCart({
                    isLoaded: true,
                    cartData: res
                })
                console.log(res);
            } else {
                setCart({
                    isEmpty: true
                })
            }
        }
        getCart()
    }, [])

    if (cart.isLoaded && cart.cartData.items.length != 0) {

        const renderCartItems = cart.cartData.items.map((item => <>
            <ProductListItem
                productName={item.product.name}
                productImage={item.product.images[0].file.url}
                quantity={item.quantity}
            />

        </>))


        return (

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl h-full">
                    
                        <div className="mt-8">
                            <ul className="space-y-4">

                                {renderCartItems}


                            </ul>

                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    <dl className="space-y-0.5 text-base dark:text-white-500">
                                        <div className="flex justify-between">
                                            <dt>Subtotal</dt>
                                            <dd>${cart.cartData.sub_total}</dd>
                                        </div>

                                        <div className="flex justify-between">
                                            <dt>Tax</dt>
                                            <dd>${cart.cartData.tax_total}</dd>
                                        </div>

                                        <div className="flex justify-between">
                                            <dt>Discount</dt>
                                            <dd>${cart.cartData.discount_total}</dd>
                                        </div>

                                        <div className="flex justify-between !text-base font-medium">
                                            <dt>Total</dt>
                                            <dd>${cart.cartData.grand_total}</dd>
                                        </div>
                                    </dl>


                                    <div className="flex justify-end gap-8">
                                        <div className="block rounded dark:bg-sky-400 px-5 py-3 text-sm text-gray-100 transition dark:hover:bg-sky-500">
                                        <CoinbaseBtn cart={cart.cartData} />
                                        </div>

                                        <a
                                            href="#"
                                            className="block rounded dark:bg-red-400 px-5 py-3 text-sm text-gray-100 transition dark:hover:bg-red-500"
                                        >
                                            Checkout
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    } else if (cart.isLoaded && cart.items.length === 0 || cart.isEmpty === true) {
        return (
            <div className="flex flex-col mx-auto max-w-screen-xl h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl max-h-full">
                    <p className="lg:text-xl sm:text-base text-center">Your cart is empty</p>
                </div>
            </div>
        )
    } else {
        <></>
    }
} 