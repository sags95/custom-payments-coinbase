'use client'

import { TrashIcon } from "@heroicons/react/24/outline"
import { useCartActions } from "@/utils/cartContext";
import Image from "next/image";


export default function ProductListItem({ productName, productImage, quantity, itemId }) {
  const { removeProduct } = useCartActions();

  const handleRemoveProduct = () => {
    const item = itemId;

    removeProduct(item);
  }

  return (
    <li className="flex items-center gap-4">
      <Image
        src={productImage}
        alt=""
        width={64}
        height={64}
        className="h-16 w-16 rounded object-cover"
      />

      <div>
        <h3 className="text-lg dark:text-white-700 ">{productName}</h3>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form>
          <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

          <input
            readOnly
            type="number"
            min="1"
            value={quantity}
            id="Line1Qty"
            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
        </form>

        <button className="text-gray-600 transition hover:text-red-600"
          onClick={handleRemoveProduct}
        >
          <span className="sr-only">Remove item</span>

          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </li>

  )
}