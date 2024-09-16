import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles.ts';
import React from 'react';

interface Props {
  onPress: () => void;
  title: string;
  type?: 'primary' | 'danger';
}

function Button({onPress, title, type = 'primary'}: Props) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            type === 'danger' ? styles.danger : styles.primary,
          ]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default Button;
