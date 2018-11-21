import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const PageHeader = ({ titleText = 'Partout', textButton = '<', style = {}, onPress }) =>
    <TouchableOpacity style={[ styles.container, style ]} onPress={onPress}>
        <View style={[ styles.header ]}>
            <Text style={[styles.font, styles.btn]}>{textButton}</Text>
            <Text style={[styles.font, styles.text]} ellipsizeMode={'tail'} numberOfLines={1}>{titleText}</Text>
        </View>
    </TouchableOpacity>

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 999
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    font: {
        fontWeight: 'bold',
        fontSize: 15
    },
    btn: {},
    text: {
    }
})

export default PageHeader