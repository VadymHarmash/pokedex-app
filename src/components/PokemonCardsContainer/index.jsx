import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PokemonCard from '../PokemonCard';

export default function PokemonCardsContainer() {
    const [pokemonCollection, setPokemonCollection] = useState([])
    const [next, setNext] = useState()
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(data => {
                setPokemonCollection(data.results)
                setNext(data.next)
            })
    }, [])

    const loadMore = () => {
        if (isLoadingMore) return
        if (next) {
            setIsLoadingMore(true)
            fetch(next)
                .then(res => res.json())
                .then(data => {
                    setPokemonCollection(prevPokemonCollection => [...prevPokemonCollection, ...data.results])
                    setNext(data.next)
                    setIsLoadingMore(false)
                })
        }
    }

    return (
        <View style={styles.pokemonList}>
            <FlatList
                data={pokemonCollection}
                keyExtractor={item => item.name}
                numColumns={3}
                renderItem={({ item }) => (
                    <PokemonCard url={item.url} />
                )}
                ListFooterComponent={
                    <TouchableOpacity 
                        onPress={loadMore}
                        style={styles.loadMoreBtn}>
                        <Text style={styles.loadMoreText}>Load more</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 10
    },
    loadMoreText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        padding: 10,
    }
})
