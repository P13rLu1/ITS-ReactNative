import {Image, Text, TouchableOpacity, Vibration, View} from 'react-native';
import {Alunno} from '../../types/alunno.ts';
import {styles} from '../../assets/elenco/elencoStyle.ts';

interface Props {
  alunno: Alunno;
  apriDettaglio: () => void;
}

export function ListaAlunnoCard(props: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.apriDettaglio();
        Vibration.vibrate(100);
      }}
      style={styles.container}>
      <Image source={{uri: props.alunno.foto}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          {props.alunno.cognome} {props.alunno.nome}
        </Text>
        <Text style={styles.matricolaText}>{props.alunno.matricola}</Text>
      </View>
    </TouchableOpacity>
  );
}
