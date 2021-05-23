import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable,Total } from './styles'

function Cart() {
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
                <tr>
                    <td>
                        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/26/D22-3836-026/D22-3836-026_zoom2.jpg?ts=1585920125&ims=326x" alt="Tenis"></img>
                    </td>
                    <td>
                        <strong>Tênis muito massa</strong>
                        <span>R$129,90</span>
                    </td>
                    <td>
                        <button type="button">
                            <MdRemoveCircleOutline size={20} color="#7159c1"></MdRemoveCircleOutline>
                        </button>
                        <input type="number" readOnly value={1} />
                        <button type="button">
                            <MdAddCircleOutline size={20} color="#7159c1"></MdAddCircleOutline>

                        </button>
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
            </tbody>
        </ProductTable>

        <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
                <span>TOTAL</span>
                <strong>R$1920,28</strong>
            </Total>
        </footer>
    </Container>
    );
}

export default Cart;