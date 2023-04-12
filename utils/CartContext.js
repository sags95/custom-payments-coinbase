'use client'

import { createContext, useReducer } from "react";
import swell from 'swell-js'

swell.init(process.env.NEXT_PUBLIC_SWELL_STORE_ID, process.env.NEXT_PUBLIC_SWELL_PK);

export const CartContext = createContext({
    isLoaded: false,
    cart: {}
});

export const CartDispatchContext = createContext({
    isLoaded: false,
    cart: {}
});

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

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
        case 'loaded': { 
            return (
                {
                    isLoaded: true,
                    cart: action.data
                }
            )
        }
        case 'productAdded': {
            return (
                {
                    cart: action.data
                }
            )
        }
    }
}

export function useCart(){
    return useContext(CartContext);
}

export function useCartDispatch(){
    return useContext(CartDispatchContext);
}

const initialCart = {
    isLoaded: false,
    cart: {}
}