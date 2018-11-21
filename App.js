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
import configureStore from './src/store'
import Navigator from './src/containers/Navigator'

const App = () => <Provider store={configureStore()} ><Navigator/></Provider>

export default App
