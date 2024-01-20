import { SafeAreaView, StyleSheet, Text } from 'react-native';
import PokemonCardsContainer from './src/components/PokemonCardsContainer';

export default function App() {
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
