export function addToCartRequest(id) {
    // Enviará um objeto com os valores {type, id} para o SAGA.
   return {
        type: '@cart/ADD_TO_CART_REQUEST',
        id,
    }
};

export function addToCartSuccess(product) {
    return {
         type: '@cart/ADD_TO_CART_SUCCESS',
         product,
     }
 };

export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE_FROM_CART',
        id
    }
}

export function updateAmountRequest(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_REQUEST',
        id,
        amount
    }
};

export function updateAmountSuccess(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_SUCCESS',
        id,
        amount
    }
};