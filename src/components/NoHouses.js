import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const NoHouses = ({ children }) => {
    return <View style={styles.container}>
            <Text style={[styles.text, styles.emoji]}>😢</Text>
            <Text style={styles.text} textAlign='center'>Aucune maison trouvée</Text>
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

export default NoHouses