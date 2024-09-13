import React, {useState} from 'react';
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
  const [list, setList] = useState<string[]>([]);

  function addToList(item: string) {
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

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Inserire un prodotto'}
              placeholderTextColor={'lightgray'}
              keyboardType={'default'}
              style={styles.textInput}
              value={text}
              onChangeText={setText}
            />

            <TouchableOpacity
              style={styles.button}
              disabled={text === ''}
              onPress={() => {
                addToList(text);
                setText('');
              }}>
              <Text style={styles.buttonText}>Aggiungi</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Lista scrollabile sotto l'input */}
        <ScrollView style={styles.scrollView}>
          {list.map((item, index) => (
            <View key={index} style={styles.salutoContainer}>
              <Text style={styles.salutoText}>{item}</Text>
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
    flex: 1, // Occupa metà della schermata o meno
    justifyContent: 'center', // Centra verticalmente
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderRadius: 16,
    padding: 10,
    color: '#000',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1, // Occupa lo spazio rimanente
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
