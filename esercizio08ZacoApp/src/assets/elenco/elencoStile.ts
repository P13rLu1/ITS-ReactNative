// styles.ts
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Sfondo scuro
    padding: 16,
  },
  card: {
    backgroundColor: '#1E1E1E', // Sfondo delle card
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
  pokemonName: {
    color: '#FFFFFF', // Testo bianco
    fontSize: 20,
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: 150,
    height: 150,
    marginVertical: 8,
  },
  footerButton: {
    backgroundColor: '#17a2b8', // Bottone scuro
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  footerText: {
    color: '#FFFFFF', // Testo del bottone
    fontSize: 16,
  },
});

export default styles;
