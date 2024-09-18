import {StyleSheet} from 'react-native';

export const elencoStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Allinea l'immagine e il testo orizzontalmente
    justifyContent: 'flex-start', // Allinea il contenuto a sinistra
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // Sfondo scuro
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10, // Aggiunge un bordo arrotondato al contenitore
    shadowColor: '#000', // Ombra più leggera su sfondo scuro
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4, // Ombra su Android
  },
  text: {
    color: '#f0f0f0', // Testo chiaro per contrasto
    fontSize: 18, // Dimensione bilanciata
    fontWeight: '600',
    marginLeft: 15, // Spazio tra l'immagine e il testo
  },
  image: {
    width: 80, // Immagine leggermente più piccola
    height: 80,
    borderRadius: 40,
    borderWidth: 2, // Aggiunge un bordo all'immagine
    borderColor: '#333', // Colore del bordo per un look coerente con il tema scuro
  },
  background: {
    backgroundColor: 'black', // Sfondo scuro per la schermata
  },
});
