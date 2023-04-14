'use client'

import { useEffect, useState } from "react"
import swell from 'swell-js'
import ProductListItem from "@/components/productListItem";
import CoinbaseBtn from "@/components/coinbaseBtn";
import { useCart, useCartDispatch } from "@/utils/cartContext";

export default function Cart({ checkoutId }) {


    const cart = useCart();
    console.log(cart);


    if (!cart){
        return (<></>)
    }

    if (cart === undefined) {
        return(<></>)
    }
    if (cart.items.length != 0) {

        const renderCartItems = cart.items.map((item => <>
            <ProductListItem
                productName={item.product.name}
                productImage={item.product.images[0].file.url}
                quantity={item.quantity}
                itemId={item.id}
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
                                            <dd>${cart.sub_total.toFixed(2)}</dd>
                                        </div>

                                        <div className="flex justify-between">
                                            <dt>Tax</dt>
                                            <dd>${cart.tax_total.toFixed(2)}</dd>
                                        </div>

                                        <div className="flex justify-between">
                                            <dt>Discount</dt>
                                            <dd>${cart.discount_total.toFixed(2)}</dd>
                                        </div>

                                        <div className="flex justify-between !text-base font-medium">
                                            <dt>Total</dt>
                                            <dd>${cart.grand_total.toFixed(2)}</dd>
                                        </div>
                                    </dl>


                                    <div className="flex justify-end gap-8">
                                        <div className="block rounded dark:bg-sky-400 px-5 py-3 text-sm text-gray-100 transition dark:hover:bg-sky-500">
                                        <CoinbaseBtn cart={cart} />
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
    } else if ( cart.items.length === 0) {
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