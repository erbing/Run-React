import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from './app/modules/slide.js'
import Main from './app/modules/main.js'

/**
 * 引入 redux
 */
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

/**
 * 引入 reducers
 */
import reducer from './app/reducers'
/**
 * 创建一个初始化的state
 */

const initState = {
    card: {
        name: 'Jack Ma',
        avator: 'a.jpg'
    },
    dialog: {
        states: false
    }
}
/**
 * 创建一个 store 仓库
 */

const store = createStore(reducer, initState)

const APP = () => (
    <div>
        <Header />
        <Main />
    </div>
)

ReactDom.render((
    <BrowserRouter>
        <Provider store={store}>
            <APP />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'))
