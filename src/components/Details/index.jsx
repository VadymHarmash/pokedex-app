import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default function Details() {

    return (
        <View style={styles.detailsContainer}>
            <Text>Here will be an info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        width: '30%',
        height: '70%',
        alignSelf: 'center',
        borderWidth: 1,
    }
})
