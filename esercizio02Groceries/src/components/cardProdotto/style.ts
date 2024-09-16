import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  innerContainer: {
    flex: 1,
  },
  inputSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#ff6347',
    textAlign: 'center',
  },
  inputWrapper: {
    width: 350,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ff6347',
    backgroundColor: '#fff',
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  textInput: {
    height: 40,
    padding: 10,
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  topInput: {
    borderBottomColor: 'gray',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 20,
  },
  salutoContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#add8e6',
    alignItems: 'center',
  },
  salutoText: {
    fontSize: 18,
    color: '#4b0082',
    fontWeight: '600',
    marginTop: 10,
  },
});

export default styles;
