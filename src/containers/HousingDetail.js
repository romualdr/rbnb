import React from 'react' 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Button, ScrollView, Image, ActivityIndicator } from 'react-native'

import actions from '../actions'

import FadeInFadeOut from '../components/FadeInFadeOut'
import PageHeader from '../components/PageHeader'
import HouseRating from '../components/HouseRating'
import AppLoading from '../components/AppLoading'

class HousingDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('housingName'),
          headerStyle: { backgroundColor: 'none' }
        }
    }

    constructor(...args) {
        super(...args)
    }

    componentDidMount() {
        const housingId = this.props.navigation.getParam('housingId')
        this.props.fetchHousing(housingId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.housing !== this.props.housing)
            this.props.navigation.setParams({ housingName: this.props.housing.listing.name })
    }

    render() {
        const { housing } = this.props
        if (!housing)
            return <AppLoading />
        return <FadeInFadeOut style={styles.container}>
            <ScrollView style={{}}>
                <ScrollView horizontal={true} style={styles.carousel}>
                    { housing.listing.picture_urls.map((uri, index) => <Image style={styles.housePicture} source={{ uri }} key={index}/> )}
                </ScrollView>
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{housing.listing.name}</Text>
                    <Text style={styles.city}>({housing.listing.city})</Text>
                    <View style={[ styles.flexSpacedCentered, styles.ownerInformations ]}>
                        <View style={{maxWidth: '80%'}}>
                            <Text style={styles.subtitle}>{housing.listing.space_type} - {housing.listing.guest_label}</Text>
                            <Text style={styles.subtitle}>Hôte : <Text style={styles.ownerName}>{housing.listing.user.first_name}</Text></Text>
                        </View>
                        <Image style={styles.ownerPicture} source={{uri: housing.listing.user.picture_url}} />
                    </View>
                    <View style={styles.flexSpacedCentered}>
                        <HouseRating rating={housing.listing.star_rating} size={25}/>
                        <Text style={styles.price}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{housing.pricing_quote.rate.amount_formatted}</Text> / nuit
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </FadeInFadeOut> 
    }

}

const styles = StyleSheet.create({
    carousel: {
        height: 250
    },
    ownerName: {
        color: '#00BF5F'
    },
    detailContainer: {
        padding: 15
    },
    flexSpacedCentered: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ownerInformations: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom:10,
        marginTop: 10
    },
    ownerPicture: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    title: {
        color: '#737373',
        fontWeight: 'bold',
        fontSize: 20
    },
    city: {
        color: 'lightgrey'
    },
    subtitle: {
        color: 'grey'
    },
    note: {
        textAlign: 'right',
        color: 'orange'
    },
    price: {
        textAlign: 'right',
        color: 'grey'
    },
    housePicture: {
        width: 400,
        height: 400
    },
    container: {}
})

export default connect(
    state => { return { housing: state.housings.details }},
    dispatch => bindActionCreators({ fetchHousing: actions.housings.fetchHousing }, dispatch)
)(HousingDetail)