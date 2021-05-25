export function addToCartRequest(id) {
    // Enviará um objeto com os valores {type, id} para o SAGA.
   return {
        type: '@cart/ADD_TO_CART_REQUEST',
        id,
    }
};

export function addToCartSucess(product) {
    return {
         type: '@cart/ADD_TO_CART_SUCESS',
         product,
     }
 };

export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE_FROM_CART',
        id
    }
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount
    }
}