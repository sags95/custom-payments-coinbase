'use client'

import { createContext, useReducer, useContext, useEffect, useRef } from "react";
import swell from 'swell-js'

swell.init(process.env.NEXT_PUBLIC_SWELL_STORE_ID, process.env.NEXT_PUBLIC_SWELL_PK);

export const CartContext = createContext(null);

export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {


    const [cart, dispatch] = useReducer(cartReducer, null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                //Fetch cart
                const res = await swell.cart.get();
                dispatch({
                    type: 'loaded',
                    data: res
                })
            } catch (e) {
                console.log(e)
            }

        }
        fetchCart()
    }, [])

    return (
        <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    )
}

function cartReducer(cart, action) {
    switch (action.type) {
      case "loaded":
      case "productAdded":
      case "productRemoved":
        return (action.data)
      default:
        return cart;
    }
  }

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

export function useCartActions(){
    const dispatch = useCartDispatch();

    const addProduct = async (productId, quantity) => {
        try {
            const res = await swell.cart.addItem({
                product_id: productId,
                quantity: quantity
            });
            dispatch({type: 'productAdded', data: res})
        } catch(e){
            console.log(e)
        }
    }

    const removeProduct = async (itemId) => {
        try {
            const res = await swell.cart.removeItem(itemId);
            dispatch({type: 'productRemoved', data: res})
        } catch (e){
            console.log(e)
        }
    }

    return {addProduct, removeProduct}
}

