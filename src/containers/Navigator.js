import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actions from '../actions'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import HousingDetail from './HousingDetail'
import HousingList from './HousingList'
import SearchForm from './SearchForm'

const AppNavigator = createStackNavigator(
    {
        List: HousingList,
        Detail: HousingDetail,
        Search: SearchForm 
    },
    {
        initialRouteName: "List"
    })

export default createAppContainer(AppNavigator)