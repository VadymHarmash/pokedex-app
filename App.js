import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PokemonCardsContainer from './src/components/PokemonCardsContainer';
import Details from './src/components/Details'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <View style={styles.contentContainer}>
        <PokemonCardsContainer />
        <Details />
      </View>
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
  contentContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});
