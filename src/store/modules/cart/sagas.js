import { all, select, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api'
import { formatPrice } from '../../../util/format'

import {addToCartSucess, updateAmount} from './actionsCart'

// esse function* é igual a utilizar async function, só que o function* é mais potente
// o ID está com {id} pois vc está buscando apenas o id da ActionCart, lá virá um type e um id como objeto, mas vc só quer o id. (Destructuring)
function* addToCart( { id } ) {
    const productExists = yield select (
        // ReducerCart pois é como está na rootReducere
        state => state.ReducerCart.find(p => p.id === id)
    )
    
    if (productExists) {
        const amount = productExists.amount + 1;
        yield put(updateAmount(id, amount))
    } else {
        // yield seria igual ao await
        const response = yield call(api.get, `/products/${id}`)

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price)
        }

        yield put(addToCartSucess(data));
    }
}

export default all([
    takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
])