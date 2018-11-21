/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './src/store'
import ConnectivityManager from './src/containers/ConnectivityManager'
import Navigator from './src/containers/Navigator'
import AppLoading from './src/components/AppLoading'

const { store, persistor } = configureStore()

const App = () =>
    <Provider store={store} >
        <PersistGate loading={<AppLoading />} persistor={persistor}>
            <ConnectivityManager/>
            <Navigator/>
        </PersistGate>
    </Provider>

export default App
