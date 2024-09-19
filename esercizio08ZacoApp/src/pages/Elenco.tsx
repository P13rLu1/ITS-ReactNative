import React, {useEffect, useState} from 'react';
import {PokemonResult, PokemonType} from '../types/pokemonType.ts';
import {ListaPokemonCard} from '../components/ListaPokemonCard.tsx';
import {FlatList, Text, TouchableOpacity, Vibration, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from './Pokemon.tsx';
import styles from '../assets/elenco/elencoStile.ts'; // Importa gli stili

type Props = NativeStackScreenProps<StackParamList, 'Elenco'>;

export const Elenco = (props: Props) => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [listaPokemon, setListaPokemon] = useState<PokemonType[]>([]);

  const getListaPokemon = () => {
    fetch(url)
      .then(response => response.json())
      .then((data: PokemonResult) => {
        setListaPokemon([...listaPokemon, ...data.results]);
        setUrl(data.next);
      });
  };

  useEffect(() => {
    getListaPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={listaPokemon}
        renderItem={({item, index}) => (
          <ListaPokemonCard
            name={item.name.toUpperCase()}
            index={index + 1}
            apriDettaglio={() => {
              props.navigation.navigate('Dettaglio', {url: item.url});
            }}
          />
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => {
              getListaPokemon();
              Vibration.vibrate(100);
            }}>
            <Text style={styles.footerText}>Carica Altri Pokemon</Text>
          </TouchableOpacity>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
