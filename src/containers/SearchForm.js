import React from 'react'
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Button, TouchableOpacity } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DateInput from '../components/DateInput'
import AppTextInput from '../components/AppTextInput'
import actions from '../actions'

class SearchForm extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Rechercher',
            headerStyle: { backgroundColor: 'none' }
        }
    }

    submit(values, dispatch) {
        dispatch(actions.housings.startLoading())
        this.props.navigation.navigate('List')
        dispatch(actions.housings.fetchHousings())
    }

    geolocate() {
        this.props.geolocate()
    }

    render() {
        return <ScrollView style={styles.container}>
                <View style={[styles.inputContainer, styles.cityContainer]}>
                    <Field name={'city'} component={AppTextInput} style={[styles.field, styles.cityField]} placeholder={'Ville'} autoFocus={true}/>
                    <TouchableOpacity containerStyle={[styles.geolocationIcon]} onPress={() => this.geolocate()}>
                        <Text style={{ fontSize: 30 }}>✨</Text>
                    </TouchableOpacity>
                </View>
                <Field name={'minDate'} component={DateInput}  style={[styles.inputContainer, styles.field]} placeholder={'Date de début'}/>
                <Field name={'maxDate'} component={DateInput}  style={[styles.inputContainer, styles.field]} placeholder={'Date de fin'}/>
                <Button title="Rechercher" color={'brown'}onPress={this.props.handleSubmit((...args) => this.submit(...args))}/>
            </ScrollView>
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    geolocationIcon: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10
    },
    cityField: {
        flex: 1
    },
    cityContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        marginBottom: 50
    },
    field: {
        borderColor: 'lightgrey',
        borderBottomWidth: 1
    },
    searchIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0
    }
})

export const name = 'search'

export default reduxForm({form: name, destroyOnUnmount: false })(connect(
    state => { return {} },
    dispatch => bindActionCreators({ geolocate: actions.geolocation.geolocate }, dispatch)
)(SearchForm))