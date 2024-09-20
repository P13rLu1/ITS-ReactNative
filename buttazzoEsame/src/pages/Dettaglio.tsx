import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from './Alunni.tsx';
import {DettaglioAlunnoCard} from '../components/dettaglio/DettaglioAlunnoCard.tsx';
import {dettaglioStyles} from '../assets/dettaglio/dettaglioStyles.ts';

type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

export const Dettaglio = ({route}: Props) => {
  if (!route.params) {
    return <Text>Errore</Text>;
  }

  return (
    <View style={dettaglioStyles.container}>
      <DettaglioAlunnoCard alunno={route.params.Alunno} />
    </View>
  );
};
