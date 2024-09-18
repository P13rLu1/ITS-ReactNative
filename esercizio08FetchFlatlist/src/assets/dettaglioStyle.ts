import {StyleSheet} from 'react-native';

export const CardDettaglioStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#000000', // Sfondo completamente nero
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 3,
    backgroundColor: '#1e1e1e', // Sfondo scuro per la card
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0f0f0', // Colore chiaro per il testo
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
    alignSelf: 'center', // Allinea l'immagine al centro
    borderWidth: 3,
    borderColor: '#333',
  },
  label: {
    fontSize: 18,
    color: '#f0f0f0', // Colore chiaro per il testo
    fontWeight: '600',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#b0b0b0', // Colore più chiaro per i dettagli secondari
    marginBottom: 15,
  },
});
