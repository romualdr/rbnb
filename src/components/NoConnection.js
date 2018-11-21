import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const NoConnection = ({ children }) => {
    return <View style={styles.container}>
            <Text style={styles.text} textAlign='center'>Vous êtes hors-ligne</Text>
            {children}
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emoji: {
        fontSize: 35
    },
    text: {
        fontSize: 15,
        color: 'grey',
        paddingBottom: 30,
        textAlign: 'center'
    }
})

export default NoConnection