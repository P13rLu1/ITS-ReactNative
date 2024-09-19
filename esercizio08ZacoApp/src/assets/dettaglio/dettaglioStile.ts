// styles.ts
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Sfondo scuro
    padding: 16,
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  detailContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    flexGrow: 1, // Permette al contenitore di espandersi nello scroll
  },
  statsContainer: {
    flexDirection: 'column', // Cambia da 'row' a 'column' per evitare overflow orizzontale
    alignItems: 'flex-start',
    width: '100%',
  },
  statItem: {
    backgroundColor: '#333333',
    padding: 10,
    marginVertical: 4,
    borderRadius: 12,
    width: '100%',
  },
  statText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  pokemonImage: {
    width: 300,
    height: 300,
    marginVertical: 16,
  },
  pokemonName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 8,
  },
  typeContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  typeText: {
    color: '#FFFFFF',
    backgroundColor: '#3A3A3A',
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
  },
  characteristicText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default styles;
