import {FlatList, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from './Alunni.tsx';
import {useEffect, useState} from 'react';
import {Alunno} from '../types/alunno.ts';
import {ListaAlunnoCard} from '../components/elenco/ListaAlunnoCard.tsx';
import {styles} from '../assets/elenco/elencoStyle.ts';

type Props = NativeStackScreenProps<StackParamList, 'Elenco'>;

export const Elenco = (props: Props) => {
  const url =
    'https://raw.githubusercontent.com/alemarra89/its2325/main/alunni.json';
  const [listaAlunni, setListaAlunni] = useState<Array<Alunno>>([]);

  const getListaAlunni = () => {
    fetch(url)
      .then(response => response.json())
      .then((data: Alunno[]) => {
        setListaAlunni(data);
      });
  };

  useEffect(() => {
    getListaAlunni();
  }, []);

  return (
    <View style={styles.elencoContainer}>
      <FlatList
        data={listaAlunni}
        renderItem={({item}) => (
          <ListaAlunnoCard
            alunno={item}
            apriDettaglio={() => {
              props.navigation.navigate('Dettaglio', {Alunno: item});
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.matricola}
        style={styles.flatList}
      />
    </View>
  );
};
