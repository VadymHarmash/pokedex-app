import { StyleSheet } from 'react-native'

export const pokemonCardStyles = StyleSheet.create({
    container: {
        width: '33%',
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
        width: 50,
        height: 50,
    },
    name: {
        fontWeight: "600",
        fontSize: 10
    },
    types: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 10
    },
    type: {
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 3,
        fontSize: 8
    }
})