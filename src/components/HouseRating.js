import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, View } from 'react-native'

const stars = {
    active: require('../images/star-active.png'),
    disabled: require('../images/star.png'),
}

const HouseRating = ({ rating = 0, size = 10, max = 5 }) => {
    const floored = Math.floor(rating)
    const images = Array.from(new Array(floored), () => stars.active).concat(Array.from(new Array(max - floored), () => stars.disabled))

    return <View style={styles.container}>{
        images.map((image, index) => <Image source={image} key={index} style={[styles.star, { width: size, height: size }]} />)
    }</View>
}

HouseRating.propTypes = {
    rating: PropTypes.number,
    size: PropTypes.number,
    max: PropTypes.number
}

HouseRating.defaultProps = {
    rating: 0,
    size: 10
}

const styles = StyleSheet.create({
    star: {},
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default HouseRating