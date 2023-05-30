'use client'

import { useCartActions } from "@/utils/cartContext";
import Image from "next/image";
import { useState } from "react";
export default function ProductCard({ productId, productName, productPrice, productImg }) {

  const [buttonText, setButtonText] = useState("Add to Cart");

  const { addProduct } = useCartActions();

  const handleAddProduct = () => {
    const product = productId;
    const quantity = 1

    addProduct(product, quantity);

    setButtonText("Product Added!");
    setTimeout(() => {
      setButtonText("Add to Cart")
    }, 2000)
  }



  return (
    <div className="group relative block overflow-hidden">
      <Image
        src={productImg}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        width={640}
        height={360}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />

      <div className="relative border border-gray-100 dark:bg-zinc-900 p-6">

        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{productName}</h3>

        <p className="mt-1.5 text-sm text-gray-700 dark:text-white">${productPrice.toFixed(2)}</p>

        <div

          className="mt-4">

          <button
            className="block w-full bg-red-700 p-4 text-sm font-medium transition hover:bg-red-800"
            onClick={handleAddProduct}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>

  )
}