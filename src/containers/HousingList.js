import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Button } from 'react-native'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { Icon } from 'react-native-elements'

import actions from '../actions'
import HousingListItem from '../components/HousingListItem'
import FadeInFadeOut from '../components/FadeInFadeOut'
import PageHeader from '../components/PageHeader'
import { name as SearchFormName } from '../containers/SearchForm'

import AppLoading from '../components/AppLoading'
import NoHouses from '../components/NoHouses'


function NoHousesReload({ onPress }) {
    return <NoHouses>
        <Button title='Effacer la recherche' onPress={onPress} color={'brown'}/>
    </NoHouses>
}

class HousingList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('pageTitle') || 'Partout',
            headerRightContainerStyle: { paddingRight: 15 },
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerRight: (
                <Icon name='search' onPress={() => navigation.navigate('Search')}/>
            ),
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ pageTitle: this.props.city })
        this.props.fetchHousings()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.city !== this.props.city)
            this.props.navigation.setParams({ pageTitle: this.props.city })
    }

    goToDetails(id) {
        this.props.navigation.navigate('Detail', { housingId: id })
    }
    renderHouseListItem(housing) {
        return (
            <TouchableOpacity id={housing.listing.id} onPress={() => this.goToDetails(housing.listing.id)}>
                <HousingListItem housing={housing} />
            </TouchableOpacity>
        )
    }
    cleanSearch() {
        this.props.cleanSearch()
    }
    render() {
        const { housings } = this.props
        if (housings.status === actions.housings.HOUSING_STATUS_LOADING)
            return <AppLoading />
        if (housings.status === actions.housings.HOUSING_STATUS_NO_HOUSES)
            return <NoHousesReload onPress={() => this.cleanSearch()} />
        return (
            <FadeInFadeOut style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={housings.list}
                    keyExtractor={({listing}) => `${listing.id}` }
                    renderItem={({item})  => this.renderHouseListItem(item)} />
            </FadeInFadeOut>
        )
    }
}


const styles = StyleSheet.create({
    header: {},
    list: {},
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
})

export default connect(
    state => { return { housings: state.housings, city: state.housings.city }},
    dispatch => bindActionCreators({ fetchHousings: actions.housings.fetchHousings, cleanSearch: actions.housings.cleanSearch }, dispatch)
)(HousingList)