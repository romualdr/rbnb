import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const AppLoading = () => <View style={styles.container}>
    <ActivityIndicator size={'large'} color={'brown'}></ActivityIndicator>
</View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})

export default AppLoading