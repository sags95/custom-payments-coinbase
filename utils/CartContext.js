'use client'

import { createContext, useReducer, useContext, useEffect } from "react";
import swell from './swellClient'


export const CartContext = createContext(null);

export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {


    const [cart, dispatch] = useReducer(cartReducer, null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
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
    }, [dispatch])

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
        case 'orderSubmitted':
        case 'cartUpdated':
            return (action.data)
        case 'cartCleared':
            return null;
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

export function useCartActions() {
    const dispatch = useCartDispatch();

    const addProduct = async (productId, quantity) => {
        try {
            const res = await swell.cart.addItem({
                product_id: productId,
                quantity: quantity
            });
            dispatch({ type: 'productAdded', data: res })
            return res;
        } catch (e) {
            console.log(e)
        }
    }

    const removeProduct = async (itemId) => {
        try {
            const res = await swell.cart.removeItem(itemId);
            dispatch({ type: 'productRemoved', data: res })
            return res;
        } catch (e) {
            console.log(e)
        }
    }

    const checkout = async () => {
        try {
            const res = await swell.cart.submitOrder();
            dispatch({ type: 'orderSubmitted', data: res })
            dispatch({type: 'cartCleared'})
            return res;
        } catch (e) {
            console.log(e)
        }
    }

    const updateCart = async (params) => {
        try {
            const res = await swell.cart.update(params);
            dispatch({ type: 'cartUpdated', data: res });
            return res;
        } catch (e) {
            console.log(e)
        }
    }

    return { addProduct, removeProduct, checkout, updateCart }
}

