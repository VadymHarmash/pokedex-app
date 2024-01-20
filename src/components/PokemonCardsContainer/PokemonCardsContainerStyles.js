import { StyleSheet } from 'react-native'

export const PokemonCardsContainerStyles = StyleSheet.create({
    pokemonList: {
        flex: 1,
        backgroundColor: '#fff',
        width: '70%',
    },
    loadMoreBtn: {
        width: '100%',
        backgroundColor: '#0080ff',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 20
    },
    loadMoreText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        padding: 10,
    }
})