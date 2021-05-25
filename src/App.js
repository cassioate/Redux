import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header/indexHeader'
import GlobalStyle from './styles/global'

import './config/ReactotronConfig'
import store from './store/indexRedux'

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle></GlobalStyle>
                <ToastContainer autoClose={3000}></ToastContainer>
            </BrowserRouter>
        </Provider>
        )
}