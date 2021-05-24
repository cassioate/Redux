import React from 'react';
import { connect } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import * as ActionCart from '../../store/modules/cart/actionsCart'

import { Container, ProductTable, Total } from './styles'
import { bindActionCreators } from 'redux';

function Cart({cart, removeFromCart}) {
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
                                <MdRemoveCircleOutline size={20} color="#7159c1"></MdRemoveCircleOutline>
                            </button>
                            <input type="number" readOnly value={product.amount} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1"></MdAddCircleOutline>

                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>{product.amount * product.price}</strong>
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

const mapStateToProps = state => ({
    cart: state.ReducerCart
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(ActionCart, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);