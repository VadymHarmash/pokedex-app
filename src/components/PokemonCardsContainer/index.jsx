import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import PokemonCard from '../PokemonCard';

export default function PokemonCardsContainer() {
    const [pokemon, setPokemon] = useState([])
    const [next, setNext] = useState()
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(data => {
                setPokemon(data.results)
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
                    setPokemon(prevPokemon => [...prevPokemon, ...data.results])
                    setNext(data.next)
                    setIsLoadingMore(false)
                })
        }
    }

    return (
        <FlatList
            style={styles.pokemonList}
            data={pokemon}
            keyExtractor={item => item.name}
            numColumns={3}
            renderItem={({ item }) => (
                <PokemonCard url={item.url} name={item.name} />
            )}
            onEndReached={loadMore}
            ListFooterComponent={() => isLoadingMore ? <ActivityIndicator /> : null}
        />
    )
}

const styles = StyleSheet.create({
    pokemonList: {
        flex: 1,
        backgroundColor: '#fff',
        width: '70%',
    },
})
