import { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import PokemonCard from '../PokemonCard'
import { PokemonCardsContainerStyles } from './PokemonCardsContainerStyles'

export default function PokemonCardsContainer({ onSelectPokemon }) {
    const styles = PokemonCardsContainerStyles
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

    const handleSelectPokemon = (pokemon) => onSelectPokemon(pokemon)

    return (
        <View style={styles.pokemonList}>
            <FlatList
                data={pokemonCollection}
                keyExtractor={item => item.name}
                numColumns={3}
                renderItem={({ item }) => (
                    <PokemonCard
                        url={item.url}
                        onSelectPokemon={handleSelectPokemon}
                    />
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