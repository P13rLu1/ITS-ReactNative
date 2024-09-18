import {FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Result, Utente} from '../types/utente.ts';
import {elencoStyle} from '../assets/elencoStyle.ts';

export default function Elenco() {
  const url = 'https://randomuser.me/api/?results=50';

  const [utenti, setUtenti] = useState<Utente[]>([]);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then((result: Result) => {
        setUtenti(result.results);
      });
  }, []);

  const renderItem = ({item}: {item: Utente}) => {
    return(
      <>
        <View style={elencoStyle.background}>
          <View style={elencoStyle.container}>
            <Image
              source={{uri: item.picture.large}}
              style={elencoStyle.image}
            />
            <Text style={elencoStyle.text}>{item.name.first} {item.name.last}</Text>
          </View>
        </View>
      </>
    ) ;
  };

  return (
    <FlatList
      data={utenti}
      renderItem={renderItem}
      keyExtractor={item => item.login.uuid}
    />
  );
}
