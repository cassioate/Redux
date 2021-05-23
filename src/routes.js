import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/indexHome'
import Cart from './pages/Cart/indexCart'

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/cart" exact component={Cart}></Route>
    </Switch>
    )
}