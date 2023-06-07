'use client'

import ProductListItem from "@/components/productListItem";
import CoinbaseBtn from "@/components/coinbaseBtn";
import { useCart } from "@/utils/cartContext";
import { useRouter } from "next/navigation";

export default function Cart() {
    const cart = useCart();
    const router = useRouter();

    if (cart === undefined) {
        return (<></>)
    }

    if (cart != null && cart.items.length != 0) {
        const handleCheckout = () => {
            router.push(cart.checkout_url)
        }

        const renderCartItems = cart.items.map((item, index) => {
            return (
                <ProductListItem
                    key={index}
                    productName={item.product.name}
                    productImage={item.product.images[0].file.url}
                    quantity={item.quantity}
                    itemId={item.id}
                />
            )
        });
        return (
            <div className="min-h-screen">
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
                                            <div className="block dark:bg-sky-700 px-5 py-3 text-sm text-gray-100 transition dark:hover:bg-sky-800">
                                                <CoinbaseBtn cart={cart} />
                                            </div>
                                            <button
                                                className="block dark:bg-red-700 px-5 py-3 text-sm text-gray-100 transition dark:hover:bg-red-800"
                                                onClick={handleCheckout}
                                            >
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    } else if (cart === null || cart.items.length === 0) {
        return (
            <div className="flex flex-col mx-auto max-w-screen-xl min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl max-h-full">
                    <p className="lg:text-xl sm:text-base text-center">Your cart is empty</p>
                </div>
            </div>
        )
    } else {
        <></>
    }
} 