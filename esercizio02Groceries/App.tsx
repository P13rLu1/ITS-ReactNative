import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import styles from './src/components/cardProdotto/style.ts';

function App(): React.JSX.Element {
  const [text, setText] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  // Cambiamo il tipo di stato da array di stringhe ad array di oggetti
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

export default App;
