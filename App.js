import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import PokemonCardsContainer from './src/components/PokemonCardsContainer'
import Details from './src/components/Details'

export default function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pokedex</Text>
            <View style={styles.contentContainer}>
                <PokemonCardsContainer onSelectPokemon={setSelectedPokemon} />
                <Details selectedPokemon={selectedPokemon} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 1,
        width: '50%',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
});
