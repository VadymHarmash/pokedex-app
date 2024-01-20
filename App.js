import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PokemonCard from './src/components/PokemonCard';
import PokemonCardsContainer from './src/components/PokemonCardsContainer';

export default function App() {
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
    if(isLoadingMore) return
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <PokemonCardsContainer />
    </SafeAreaView>
  )
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
})
