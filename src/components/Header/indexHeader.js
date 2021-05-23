import React from 'react';
import {Link} from 'react-router-dom'
import {MdShoppingBasket} from 'react-icons/md'

import {Container, Cart} from './styles'
import LogoRocketShoes from '../../assets/images/logo_rocket.svg'

function Header() {
  return (
    <Container>
        <Link to={"/"}>
            <img src={LogoRocketShoes} alt="RocketShoes"/>
        </Link>
       
        <Cart to={"/cart"}>
            <div>
                <strong>Meu carrinho</strong>
                <span>3 Itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
        </Cart>

    </Container>
    )
}

export default Header;