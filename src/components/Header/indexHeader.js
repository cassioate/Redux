import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {MdShoppingBasket} from 'react-icons/md'

import {Container, Cart} from './styles'
import LogoRocketShoes from '../../assets/images/logo_rocket.svg'

function Header({ cart }) {

  return (
    <Container>
        <Link to={"/"}>
            <img src={LogoRocketShoes} alt="RocketShoes"/>
        </Link>
       
        <Cart to={"/cart"}>
            <div>
                <strong>Meu carrinho</strong>
                <span>{cart.length} Itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
        </Cart>

    </Container>
    )
}

/** O nome do reducer tem que ser igual está no rootReducer.js */
export default connect(reducer => ({
    cart: reducer.ReducerCart
}))(Header);