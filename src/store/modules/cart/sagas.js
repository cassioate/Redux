import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api'

import {addToCartSucess} from './actionsCart'

// esse function* é igual a utilizar async function, só que o function* é mais potente
// o ID está com {id} pois vc está buscando apenas o id da ActionCart, lá virá um type e um id como objeto, mas vc só quer o id. (Destructuring)
function* addToCart( { id } ) {
    // yield seria igual ao await
    const response = yield call(api.get, `/products/${id}`)

    yield put(addToCartSucess(response.data));
}

export default all([
    takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
])