import { StyleSheet } from 'react-native'

export const pokemonCardStyles = StyleSheet.create({
    container: {
        width: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
    },
    imageContainer: {
        padding: 10,
        borderWidth: 1,
    },
    image: {
        width: 100,
        height: 100,
    },
    name: {
        fontWeight: "600"
    },
    types: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 10
    },
    type: {
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 3,
    }
})