import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

function App(): React.JSX.Element {
  const [text, setText] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  // Cambiamo il tipo di stato da array di stringhe a array di oggetti
  const [list, setList] = useState<{ name: string; price: string }[]>([]);

  function addToList(item: { name: string; price: string }) {
    setList([...list, item]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}>
        {/* Input centrato verticalmente */}
        <View style={styles.inputSection}>
          <Text style={styles.headerText}>Lista Della Spesa</Text>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'Inserire un prodotto'}
              placeholderTextColor={'lightgray'}
              keyboardType={'default'}
              style={[styles.textInput, styles.topInput]}
              value={text}
              onChangeText={setText}
            />

            <TextInput
              placeholder={'Prezzo'}
              placeholderTextColor={'lightgray'}
              keyboardType={'numeric'}
              style={[styles.textInput]}
              value={price}
              onChangeText={setPrice}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            disabled={(text && price) === ''}
            onPress={() => {
              addToList({ name: text, price: price });
              setText('');
              setPrice('');
            }}>
            <Text style={styles.buttonText}>Aggiungi</Text>
          </TouchableOpacity>
        </View>

        {/* Lista scrollabile sotto l'input */}
        <ScrollView style={styles.scrollView}>
          {list.map((item, index) => (
            <View key={index} style={styles.salutoContainer}>
              <Text style={styles.salutoText}>
                {item.name} - {item.price}€
              </Text>
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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

export default App;
