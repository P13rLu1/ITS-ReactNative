import {Utente} from '../../types/utente.ts';
import {elencoStyle} from '../../assets/elencoStyle.ts';
import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';

interface CardUtenteProps {
  utente: Utente;
  onUtentePress: () => void;
}

export default function CardUtente({utente, onUtentePress}: CardUtenteProps) {
  return (
    <>
      <View style={elencoStyle.background}>
        <Pressable onPress={onUtentePress}>
          <View style={elencoStyle.container}>
            <Image
              source={{uri: utente.picture.large}}
              style={elencoStyle.image}
            />
            <Text style={elencoStyle.text}>
              {utente.name.first} {utente.name.last}
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}
