import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface SalutoProps {
  name?: string;
}

function Saluto(props: SalutoProps) {
  const {name} = props;

  const [showName, setShowName] = useState<boolean>(true);

  const toggleShowName = () => {
    setShowName(!showName);
  };

  return (
    <View style={styles.salutoContainer}>
      <TouchableOpacity style={styles.button} onPress={toggleShowName}>
        <Text style={styles.buttonText}>
          {showName ? 'Hide name' : 'Show Name'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.salutoText}>
        Ciao {showName && (name || 'React Native')}!
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Primo esercizio</Text>
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      <Saluto name={'Francesco'} />
      <Saluto name={'Gian Franco'} />
      <Saluto />
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
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default App;
