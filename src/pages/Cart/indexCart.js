import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import * as ActionCart from '../../store/modules/cart/actionsCart'

import { Container, ProductTable, Total } from './styles'
import { formatPrice } from '../../util/format'


export default function Cart() {

    const dispatch = useDispatch();

    // Pegando state do REDUX
    const total = useSelector(stateReducer => formatPrice(
        stateReducer.ReducerCart.reduce((total, product) => {
            return total + product.price * product.amount
        }, 0)
    ));

    // Pegando state do REDUX
    const cart = useSelector(stateReducer => stateReducer.ReducerCart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    }))
    );

    function increment (product) {
        dispatch(ActionCart.updateAmountRequest(product.id, product.amount +1))
    }

    function decrement (product) {
        dispatch(ActionCart.updateAmountRequest(product.id, product.amount -1))
    }

    function removeFromCart(id){
        dispatch(ActionCart.removeFromCart(id));
    }

  return (
    <Container>
        <ProductTable>
            <thead>
                <tr>
                    <th />
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                { cart.map(product => (
                <tr key={product.id}>
                    <td>
                        <img src={product.image} 
                        alt={product.title}></img>
                    </td>
                    <td>
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1" onClick={() => decrement(product)}></MdRemoveCircleOutline>
                            </button>
                            <input type="number" readOnly value={product.amount} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1" onClick={() => increment(product)}></MdAddCircleOutline>

                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>{product.subtotal}</strong>
                    </td>
                    <td>
                        <button type="button" 
                            onClick={() => removeFromCart(product.id)}>
                            <MdDelete size={20} color="#7159c1"></MdDelete>
                        </button>
                    </td>
                </tr>
                ))}    
            </tbody>
        </ProductTable>

        <footer>
            <Total>
                <span>TOTAL</span>
                <strong>{total}</strong>
            </Total>
            <button type="button">Finalizar pedido</button>
        </footer>
    </Container>
    );
}