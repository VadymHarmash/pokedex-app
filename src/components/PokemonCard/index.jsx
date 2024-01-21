import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { getColorForType } from '../../constants/AbilitityColor'
import { pokemonCardStyles } from './PokemonCardStyles'

export default function PokemonCard({ url, onSelectPokemon }) {
    const styles = pokemonCardStyles
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokemon(data)
            })
    }, [url])

    if (!pokemon) return null

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onSelectPokemon(pokemon)} >
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: pokemon.sprites.other['official-artwork'].front_default
                    }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.name}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
            <View style={styles.types}>
                {pokemon.types.map((type) => {
                    return <Text style={{
                        ...styles.type,
                        backgroundColor: getColorForType(type.type.name),
                    }} key={type.type.name}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</Text>;
                })}
            </View>
        </TouchableOpacity>
    )
}