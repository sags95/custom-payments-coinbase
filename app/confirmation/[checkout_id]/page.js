
import { fetchOrder } from '@/utils/fetchOrder'


export default async function OrderConfirmation({ params }) {
    const order = await fetchOrder(params.checkout_id)

    if (order) {
        const dateCreated = new Date(order.date_created);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
        }).format(dateCreated)

        return (
            <div className="bg-gray-100 dark:bg-zinc-900 min-h-screen flex">
                <div className="container mx-auto p-6">
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-6 md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">
                            Thank you for your purchase!
                        </h1>
                        <p className="mb-4 text-gray-900 dark:text-gray-200">
                            Your order <strong>#{order.number}</strong> has been confirmed.
                        </p>
                        <p className="mb-4 text-gray-900 dark:text-gray-200">Order date: {formattedDate}</p>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
                                Order Summary:
                            </h2>
                            <ul className="space-y-2 text-gray-900 dark:text-gray-200">
                                {order.items.map((item, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span>
                                            {item.product.name} x{item.quantity}
                                        </span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <hr className="my-4 dark:border-gray-700" />
                            <div className="flex justify-between text-gray-900 dark:text-gray-200">
                                <span>Subtotal:</span>
                                <span>${order.sub_total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-900 dark:text-gray-200">
                                <span>Tax:</span>
                                <span>${order.tax_total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-900 dark:text-gray-200">
                                <span>Shipping:</span>
                                <span>${order.shipment_total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-900 dark:text-gray-200">
                                <span>Discounts:</span>
                                <span>${order.discount_total.toFixed(2)}</span>
                            </div>
                            <hr className="my-4 dark:border-gray-700" />
                            <div className="flex justify-between font-bold text-gray-900 dark:text-gray-200">
                                <span>Total:</span>
                                <span>${order.grand_total.toFixed(2)}</span>
                            </div>
                        </div>

                        <p className="text-gray-900 dark:text-gray-200">
                            If you have any questions, please contact our support team.
                        </p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}