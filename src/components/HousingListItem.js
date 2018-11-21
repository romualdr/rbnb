import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Image } from 'react-native'

import HouseRating from '../components/HouseRating'

const HousingListItem = ({ housing }) =>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: housing.listing.picture.picture }} /> 
            <Text style={styles.title}>{housing.listing.space_type} - {housing.listing.guest_label}</Text>
            <Text style={styles.subtitle}>{housing.listing.name}</Text>
            <Text style={styles.price}>{housing.pricing_quote.rate.amount_formatted} par nuit</Text>
            <HouseRating rating={housing.listing.star_rating} />
        </View>

HousingListItem.propTypes = {
    housing: PropTypes.shape({
        listing: PropTypes.shape({
            picture: PropTypes.shape({
                picture: PropTypes.string
            }),
            space_type: PropTypes.string,
            guest_label: PropTypes.string,
            name: PropTypes.string,
            star_rating: PropTypes.number
        }),
        pricing_quote: PropTypes.shape({
            rate: PropTypes.shape({
                amount_formatted: PropTypes.string
            })
        })
    })
}

export default HousingListItem

const styles = StyleSheet.create({
    image: {
        height: 200,
        marginBottom: 20,
        borderRadius: 3
    },
    title: {
        fontWeight: 'bold',
        color: 'brown',
        marginBottom: 7,
        fontSize: 10
    },
    subtitle: {
        color: '#737373',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    price: {
        color: '#737373',
        marginBottom: 3
    },
    container: {
        padding: 10,
        margin: 10
    }
})