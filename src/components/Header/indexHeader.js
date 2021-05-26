import React from 'react';
import {Link} from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import {MdShoppingBasket} from 'react-icons/md'

import {Container, Cart} from './styles'
import LogoRocketShoes from '../../assets/images/logo_rocket.svg'

export default function Header() {

    const cartSize = useSelector(state => state.ReducerCart.length)

  return (
    <Container>
        <Link to={"/"}>
            <img src={LogoRocketShoes} alt="RocketShoes"/>
        </Link>
       
        <Cart to={"/cart"}>
            <div>
                <strong>Meu carrinho</strong>
                <span>{cartSize} Itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
        </Cart>

    </Container>
    )
}