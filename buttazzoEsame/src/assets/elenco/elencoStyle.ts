import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Stili per Elenco.tsx
  elencoContainer: {
    flex: 1,
    backgroundColor: '#000000', // pitch black background
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  flatList: {
    marginTop: 10,
  },

  // Stili per la Card
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a', // dark grey for cards to contrast with background
    padding: 16,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
    borderColor: '#1e1e1e', // dark grey border
    borderWidth: 2,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    color: '#ffffff', // white text
    fontWeight: 'bold',
    marginBottom: 4,
  },
  matricolaText: {
    fontSize: 14,
    color: '#b0b0b0', // light grey text
  },
});
