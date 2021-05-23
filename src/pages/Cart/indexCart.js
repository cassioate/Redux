import React from 'react';
import { connect } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable,Total } from './styles'

function Cart({cart}) {

    console.log(cart)

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
                        <strong>R$259,80</strong>
                    </td>
                    <td>
                        <button type="button">
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

export default connect(mapStateToProps)(Cart);