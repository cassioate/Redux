import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header/indexHeader'
import GlobalStyle from './styles/global'

import './config/ReactotronConfig'
import store from './store/indexRedux'
import history from './services/history'


export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle></GlobalStyle>
                <ToastContainer autoClose={3000}></ToastContainer>
            </Router>
        </Provider>
        )
}