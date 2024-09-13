import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  Image,
  TextInput,
} from 'react-native';

interface SalutoProps {
  name?: string;
}

function Saluto(props: SalutoProps) {
  const {name} = props;

  const [showName, setShowName] = useState<boolean>(true);

  const toggleShowName = () => {
    Vibration.vibrate(100);
    setShowName(!showName);
  };

  return (
    <View style={styles.salutoContainer}>
      <TouchableOpacity style={styles.button} onPress={toggleShowName}>
        <Text style={styles.buttonText}>
          {showName ? 'Nascondi Nome' : 'Mostra Nome'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.salutoText}>
        Ciao {showName && (name || 'React Native')}!
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Primo esercizio</Text>
      <Image
        resizeMode={'stretch'}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
          width: 50,
          height: 50,
        }}
      />
      <TextInput
        placeholder={'Inserire un testo'}
        placeholderTextColor={'lightgray'}
        keyboardType={'default'}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      <Saluto name={'Francesco'} />
      <Saluto name={'Gian Franco'} />
      <Saluto />

      <TouchableOpacity
        onPress={() => {
          console.log('touchable opacity premuto');
          Vibration.vibrate(100);
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pulsante Bello</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#ff6347', // Rosso pomodoro
  },
  loader: {
    marginVertical: 20,
  },
  salutoContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#add8e6', // Azzurro chiaro
    alignItems: 'center',
  },
  salutoText: {
    fontSize: 18,
    color: '#4b0082', // Indaco
    fontWeight: '600',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ff6347', // Rosso pomodoro
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff', // Bianco
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderRadius: 16,
    padding: 10,
    color: '#000',
    backgroundColor: '#fff',
  },
});

export default App;
