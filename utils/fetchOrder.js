import swell from './swellClient'

export async function fetchOrder(checkoutId = null){
    if (checkoutId){
        const res = await swell.cart.getOrder(checkoutId);
        return res;
    } else {
        const res = await swell.cart.getOrder()
        return res
    }

}