import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PokemonCard from './src/components/PokemonCard';

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
      <FlatList
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonCard url={item.url} name={item.name} />
        )}
        onEndReached={loadMore}
        ListFooterComponent={() => isLoadingMore ? <ActivityIndicator /> : null}
      />
      {/* <TouchableOpacity
        onPress={loadMore}
      >
        <Text>Load More</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
