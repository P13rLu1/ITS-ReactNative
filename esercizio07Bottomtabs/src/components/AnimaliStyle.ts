import {StyleSheet} from 'react-native';

const AnimaliStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Sfondo scuro (nero/grigio scurissimo)
    padding: 20,
  },
  card: {
    backgroundColor: '#1e1e1e', // Grigio molto scuro per la card
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5, // Ombre più pronunciate nel tema scuro
    shadowRadius: 5,
    elevation: 5,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,  // Arrotondare i bordi dell'immagine
    marginBottom: 20,
    resizeMode: 'contain', // Mantiene le proporzioni corrette
  },
  button: {
    backgroundColor: '#ff5722', // Un colore vivace per il pulsante (arancione)
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // Testo bianco per il pulsante
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnimaliStyle;
