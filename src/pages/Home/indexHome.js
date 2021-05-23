import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md'

import { ProductList } from './styles'

// import { Container } from './styles';

function Home() {
    return (
        <ProductList>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/26/D22-3836-026/D22-3836-026_zoom2.jpg?ts=1585920125&ims=326x" 
                alt="Tenis"></img>
            <strong>Tênis 1</strong>
            <span>R$ 129,00</span>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF"> 3 </MdAddShoppingCart>
                </div>
                <span> ADICIONAR AO CARRINHO </span>
            </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/26/D22-3836-026/D22-3836-026_zoom2.jpg?ts=1585920125&ims=326x" 
                alt="Tenis"></img>
            <strong>Tênis 1</strong>
            <span>R$ 129,00</span>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF"> 3 </MdAddShoppingCart>
                </div>
                <span> ADICIONAR AO CARRINHO </span>
            </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/26/D22-3836-026/D22-3836-026_zoom2.jpg?ts=1585920125&ims=326x" 
                alt="Tenis"></img>
            <strong>Tênis 1</strong>
            <span>R$ 129,00</span>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF"> 3 </MdAddShoppingCart>
                </div>
                <span> ADICIONAR AO CARRINHO </span>
            </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/26/D22-3836-026/D22-3836-026_zoom2.jpg?ts=1585920125&ims=326x" 
                alt="Tenis"></img>
            <strong>Tênis 1</strong>
            <span>R$ 129,00</span>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF"> 3 </MdAddShoppingCart>
                </div>
                <span> ADICIONAR AO CARRINHO </span>
            </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract-se-815-masculino/26/D22-3836-026/D22-3836-026_zoom2.jpg?ts=1585920125&ims=326x" 
                alt="Tenis"></img>
            <strong>Tênis 1</strong>
            <span>R$ 129,00</span>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF"> 3 </MdAddShoppingCart>
                </div>
                <span> ADICIONAR AO CARRINHO </span>
            </button>
            </li>
        </ProductList>
        );
}

export default Home;