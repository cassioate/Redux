import { all, select, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api'
import { formatPrice } from '../../../util/format'
import { toast } from 'react-toastify'
import {addToCartSucess, updateAmount} from './actionsCart'

// esse function* é igual a utilizar async function, só que o function* é mais potente
// o ID está com {id} pois vc está buscando apenas o id da ActionCart, lá virá um type e um id como objeto, mas vc só quer o id. (Destructuring)
function* addToCart( { id } ) {
    // Verificando se produto existe para não possuir mais de uma linha do mesmo produto, aumentado só o numero dele no lugar.
    const productExists = yield select (
        // ReducerCart pois é como está na rootReducere
        state => state.ReducerCart.find(p => p.id === id)
    )

    // Verificando se existe o item em estoque
    const stock = yield call(api.get, `/stock/${id}`)
    
    // Pegando a quantidade em estoque do data que foi buscado na api
    const stockAmount = stock.data.amount

    // Quantidade de itens que já tenho no carrinho, verifico isso puxando quantos itens existem no estado atual desse item do carrinho
    const currentAmount =  productExists ? productExists.amount : 0

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade fora de estoque.')
        return
    }
    
    if (productExists) {
        // Se o produto existir, eu apenas aumento o amount do STATe dele no lugar de duplicar o item.
        yield put(updateAmount(id, amount))
    } else {
        // Se o produto não existir eu busco todos os dados desse produto na API, para inserir ele a primeira vez no carrinho

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