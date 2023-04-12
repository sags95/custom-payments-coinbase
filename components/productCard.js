'use client'

import swell from 'swell-js'
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { CartContext } from '@/utils/CartContext';
export default function ProductCard({ productId, productName, productPrice, productDesc, productImg, productMeta }) {
   
    async function addToCart(){
        
       const res = await swell.cart.addItem(productId);
       console.log(res);
    }
   

    return (
        <div className="group relative block overflow-hidden">
        <img
          src={productImg}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
      
        <div className="relative border border-gray-100 dark:bg-zinc-900 p-6">
          <span
            className="whitespace-nowrap bg-red-400 px-3 py-1.5 text-xs font-medium"
          >
            New
          </span>
      
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{productName}</h3>
      
          <p className="mt-1.5 text-sm text-gray-700 dark:text-white">${productPrice.toFixed(2)}</p>
      
          <div 
          
          className="mt-4">

            <button
              className="block w-full rounded bg-red-400 p-4 text-sm font-medium transition hover:bg-red-500"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
    )
}