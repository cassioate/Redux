import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import * as ActionCart from '../../store/modules/cart/actionsCart'

import { Container, ProductTable, Total } from './styles'
import { formatPrice } from '../../util/format'


function Cart({cart, removeFromCart, updateAmount }) {

    function increment (product) {
        // UpdateAmount é um dispatch!! Por isso envia o state no reducer
        updateAmount(product.id, product.amount +1)
    }

    function decrement (product) {
        // UpdateAmount é um dispatch!!
        updateAmount(product.id, product.amount -1)
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
                    <tr>
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
                <strong>R$ 1.920,28</strong>
            </Total>
            <button type="button">Finalizar pedido</button>
        </footer>
    </Container>
    );
}

const mapStateToProps = stateReducer => ({
    // Estou adicionando o subtotal diretamente no state que está vindo de reducer de forma a pdoer utilizar no HTML
    cart: stateReducer.ReducerCart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    }))
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(ActionCart, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);