import {SafeAreaView, Text, TextInput} from 'react-native';
import styles from './styles.ts';
import React from 'react';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  error?: string;
}

function Input({value, onChangeText, error}: Props) {
  return (
    <SafeAreaView>
      <TextInput
        style={[styles.input, {borderColor: error ? styles.inputError.borderColor : styles.input.borderColor}]}
        value={value}
        onChangeText={onChangeText}
        placeholder={'Inserisci qualcosa'}
        placeholderTextColor={'lightgray'}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </SafeAreaView>
  );
}

export default Input;
