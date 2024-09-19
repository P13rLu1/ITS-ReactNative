import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../App'; // Assicurati che il percorso sia corretto
import styles from '../assets/homepage/homepageStyle.ts';
import FastImage from 'react-native-fast-image';

// Tipo di navigazione per il tab navigator
type HomeScreenNavigationProp = BottomTabNavigationProp<TabsParamList, 'Homepage'>;

export const Homepage = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: 'https://projectpokemon.org/home/uploads/monthly_2020_08/large.T00P02.gif.f76d4d75566fbde3162bf08338a7dd07.gif' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Text style={styles.title}>Pokédex</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pokemon')}
      >
        <Text style={styles.buttonText}>Vai alla Lista dei Pokémon</Text>
      </TouchableOpacity>
    </View>
  );
};
