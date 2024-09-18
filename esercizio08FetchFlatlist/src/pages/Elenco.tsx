import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Result, Utente} from '../types/utente.ts';
import CardUtente from '../components/card-utente';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App.tsx';

type Props = NativeStackScreenProps<StackParamList, 'Elenco'>;

export default function Elenco({navigation}: Props) {
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
    return <CardUtente utente={item} onUtentePress={() => navigation.navigate("Dettaglio", {
      utente: item,
    })} />;
  };

  return (
    <FlatList
      data={utenti}
      renderItem={renderItem}
      keyExtractor={item => item.login.uuid}

    />
  );
}
