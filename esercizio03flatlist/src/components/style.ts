import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  item:{
    backgroundColor: '#f0f8ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontStyle: 'italic',
    fontSize: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    color: '#1660c2',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
    borderBottomColor: '#000',
    borderBottomWidth: 4,
    borderRadius: 12,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#ff6347',
    textAlign: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#ff6347',
    textAlign: 'center',
  },
  flatList: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
});

export default style;
