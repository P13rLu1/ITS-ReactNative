import {StyleSheet} from 'react-native';

export const dettaglioStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // pitch black background
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 175,
    borderWidth: 2,
    borderColor: '#1e1e1e', // subtle border for the image
  },
  infoContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#1a1a1a', // dark grey section background
    borderRadius: 10,
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#ffffff', // white text
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b0b0b0', // light grey section title
    marginBottom: 10,
  },
  contactCard: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1a1a1a', // dark grey background
    marginVertical: 8,
    marginBottom: 20,
    borderRadius: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#ffffff', // white text
  },
  contactLink: {
    color: '#00bfff', // light blue for links
    textDecorationLine: 'underline',
  },
});
