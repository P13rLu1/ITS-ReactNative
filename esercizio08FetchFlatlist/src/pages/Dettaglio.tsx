import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App.tsx';
import CardDettaglio from '../components/card-dettaglio';

type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

export default function Dettaglio({route}: Props) {
  return <CardDettaglio utente={route.params.utente} />;
}
