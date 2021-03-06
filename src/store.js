import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['connectivity']
  }
  
const persistedReducer = persistReducer(persistConfig, reducer)

const noop = (arg) => arg
export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store =  createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
    let persistor = persistStore(store)
    // TODO() Removr
    //persistor.purge()
    return { store, persistor }
}