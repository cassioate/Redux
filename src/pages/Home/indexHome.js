import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../util/format'

import * as ActionCart from '../../store/modules/cart/actionsCart'

import api from '../../services/api'

import { ProductList } from './styles'

export default function Home() {
    
    const [products, setProducts] = useState([])
    
    // o hook useSelector fará a busca do STATE do reducer no lugar de utilizar mapToState.
    const amountThisItemInCart = useSelector(stateReducer => stateReducer.ReducerCart.reduce((amountThisItem, product) => {
       
        // Product.id vai ser a chave(Essa chave virará o id de product id, exemplo "1" = product.amount),
        // product.amount é a quantidade desse item que já está contabilizado dentro do stateReducer
        amountThisItem[product.id] = product.amount

        return amountThisItem;
    }, {})
    );

    /** Utilizando async await dentro de um useEffect() */
    useEffect(()=>{
        async function loadProducts() {
            const response = await api.get('products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }));   
            setProducts (data)
        }

        loadProducts();        
    }
    , [])

    const dispatch = useDispatch()

    function handleAddProduct(id) {
       dispatch(ActionCart.addToCartRequest(id));
    }

        return (
            <ProductList>
                { products.map(product => (
                <li key={product.id}>
                    <img src={product.image}
                        alt={product.title}></img>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
        
                    <button type="button" onClick={() => handleAddProduct(product.id)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF"></MdAddShoppingCart> {' '} {amountThisItemInCart[product.id] || 0}
                        </div>
                        <span> ADICIONAR AO CARRINHO </span>
                    </button>
                </li>
                ))}
                
            </ProductList>
            );
    }








// import { Container } from './styles';

// class Home extends Component {
//     state = {
//         products: [],
//     }

//     async componentDidMount() {
//         const response = await api.get('products');

//         /**
//          * Adicionando um atributo chamad priceFormatted (Formatação dos preços),
//          * para ser utilizado a função de formatação apenas uma vez, quando é 
//          * feito o get dos produtos na API, podendo assim disponibilizar essa 
//          * variavel para o ProductList, sem precisar ficar chamando essa função 
//          * toda vez que a pagina der f5.
//          */
//         const data = response.data.map(product => ({
//             ...product,
//             priceFormatted: formatPrice(product.price)
//         }));

//         this.setState({ products: data })
//     }

//     componentDidUpdate(){

//     }

//     handleAddProduct = id => {
//        const { addToCartRequest } = this.props;

//        addToCartRequest(id)
//     }

//     render(){

//         const { products } = this.state 
//         const { amountThisItemInCart } = this.props

//         return (
//             <ProductList>
//                 { products.map(product => (
//                 <li key={product.id}>
//                     <img src={product.image}
//                         alt={product.title}></img>
//                     <strong>{product.title}</strong>
//                     <span>{product.priceFormatted}</span>
        
//                     <button type="button" onClick={() => this.handleAddProduct(product.id)}>
//                         <div>
//                             <MdAddShoppingCart size={16} color="#FFF"></MdAddShoppingCart> {' '} {amountThisItemInCart[product.id] || 0}
//                         </div>
//                         <span> ADICIONAR AO CARRINHO </span>
//                     </button>
//                 </li>
//                 ))}
                
//             </ProductList>
//             );
//     }
// }

// // Ele vai pegar a quantidade de cada item especifico no carrinho, para expor na Home ao lado do "ADICIONAR AO CARRINHO"
// const mapStateToProps = stateReducer => ({
//     amountThisItemInCart: stateReducer.ReducerCart.reduce((amountThisItem, product) => {
       
//         // Product.id vai ser a chave(Essa chave virará o id de product id, exemplo "1" = product.amount),
//         // product.amount é a quantidade desse item que já está contabilizado dentro do stateReducer
//         amountThisItem[product.id] = product.amount

//         return amountThisItem;
//     }, {})
// })

// const mapDispatchToProps = dispatch =>
//     bindActionCreators(ActionCart, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Home)