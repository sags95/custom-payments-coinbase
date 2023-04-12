'use client'

import ProductCard from "./productCard"
import { useEffect, useState } from "react"
import swell from 'swell-js'

export default function ProductGrid({categoryId}){
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])

    const renderProducts = products.map((item => 
        <>
        <ProductCard
        key={item.id}
        productName={item.name}
        productPrice={item.price}
        productImg={item.images[0].file.url}
        productId={item.id}
        />
        </>
    ))


    useEffect(() => {
        const getProducts = async () => {
            const res = await swell.products.list({
                limit: 4,
                category: categoryId
            });
            const products = res.results
            setProducts(products)

            const category = await swell.categories.get(categoryId);
            setCategory(category)

        }
        getProducts()
    }, [])

    if (products) {
        return (
            <>  
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <p className="lg:text-2xl sm:text-base font-bold">{category.name ?? ''}</p>
            <div className="lg:grid lg:grid-cols-4 lg:gap-4 sm:col-auto sm:my-4 sm:gap-y-8">
                {renderProducts}
            </div>
            </div>
            </>
        )
    } else {
        <></>
    }

}