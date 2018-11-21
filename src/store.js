import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

const noop = (arg) => arg

export default function configureStore() {
    const composeEnhancers = noop//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
}