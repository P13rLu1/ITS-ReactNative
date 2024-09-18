import {Image, Text, View} from 'react-native';
import React from 'react';
import {CardDettaglioStyle} from '../../assets/dettaglioStyle.ts';
import {Utente} from '../../types/utente.ts';
import {OpenURLButton} from '../card-url-redirect';

interface CardDettaglioProps {
  utente: Utente;
}

export default function CardDettaglio({utente}: CardDettaglioProps) {
  const {email, dob, gender, cell, login, picture, name, location} = utente;

  return (
    <View style={CardDettaglioStyle.screenContainer}>
      <View style={CardDettaglioStyle.container}>
        <Text style={CardDettaglioStyle.title}>Dettaglio</Text>
        <Image source={{uri: picture.large}} style={CardDettaglioStyle.image} />
        <Text style={CardDettaglioStyle.label}>
          Nome: <Text style={CardDettaglioStyle.infoText}>{name.first}</Text>
        </Text>
        <Text style={CardDettaglioStyle.label}>
          Cognome: <Text style={CardDettaglioStyle.infoText}>{name.last}</Text>
        </Text>
        <Text style={CardDettaglioStyle.label}>
          Etá: <Text style={CardDettaglioStyle.infoText}>{dob.age}</Text>
        </Text>
        <Text style={CardDettaglioStyle.label}>
          Email: <Text style={CardDettaglioStyle.infoText}>{email}</Text>
        </Text>
        <Text style={CardDettaglioStyle.label}>
          Sesso: <Text style={CardDettaglioStyle.infoText}>{gender}</Text>
        </Text>
        <Text style={CardDettaglioStyle.label}>
          Cellulare: <Text style={CardDettaglioStyle.infoText}>{cell}</Text>
        </Text>
        <Text style={CardDettaglioStyle.label}>
          Username:
          <Text style={CardDettaglioStyle.infoText}>{login.username}</Text>
        </Text>
        <Text style={CardDettaglioStyle.label}>
          Password:{' '}
          <Text style={CardDettaglioStyle.infoText}>{login.password}</Text>
        </Text>
      </View>
      <OpenURLButton
        url={`https://www.google.com/maps/place/${location.coordinates.latitude},${location.coordinates.longitude}`}
        children={'Premi Per Aprire Le Mappe'}
      />
    </View>
  );
}
