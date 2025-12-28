
import { applyMiddleware, createStore } from 'redux'

import reducer from '../reducers'

import promise from 'redux-promise-middleware'

const store = createStore(reducer, applyMiddleware(promise))

export default store
