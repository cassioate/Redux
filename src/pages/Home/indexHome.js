import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../util/format'

import api from '../../services/api'

import { ProductList } from './styles'

// import { Container } from './styles';

class Home extends Component {
    state = {
        products: [],
    }

    async componentDidMount() {
        const response = await api.get('products');

        /**
         * Adicionando um atributo chamad priceFormatted (Formatação dos preços),
         * para ser utilizado a função de formatação apenas uma vez, quando é 
         * feito o get dos produtos na API, podendo assim disponibilizar essa 
         * variavel para o ProductList, sem precisar ficar chamando essa função 
         * toda vez que a pagina der f5.
         */
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }));

        this.setState({ products: data })
    }

    componentDidUpdate(){

    }

    handleAddProduct = product => {
        const { dispatch } = this.props;

        dispatch ({
            type: 'ADD_TO_CART',
            product,
        })
    }

    render(){

        const { products } = this.state 

        return (
            <ProductList>
                { products.map(product => (
                <li key={product.id}>
                    <img src={product.image}
                        alt={product.title}></img>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
        
                    <button type="button" onClick={() => this.handleAddProduct(product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF"> 3 </MdAddShoppingCart>
                        </div>
                        <span> ADICIONAR AO CARRINHO </span>
                    </button>
                </li>
                ))}
                
            </ProductList>
            );
    }
}

export default connect()(Home)