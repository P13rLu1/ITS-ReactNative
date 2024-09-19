import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { PokemonDetail } from '../types/pokemonType.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from './Pokemon.tsx';
import { DettaglioPokemonCard } from '../components/DettaglioPokemonCard.tsx';
import styles from '../assets/dettaglio/dettaglioStile.ts'; // Importa gli stili

type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

export const Dettaglio = ({ route }: Props) => {
  const [dettaglio, setDettaglio] = useState<PokemonDetail>();

  const getDettaglio = () => {
    fetch(route.params.url)
      .then(response => response.json())
      .then((data: PokemonDetail) => {
        setDettaglio(data);
      });
  };

  useEffect(() => {
    getDettaglio();
  }, []);

  if (!dettaglio) {
    return <Text style={styles.loadingText}>Caricamento...</Text>;
  }
  return (
    <View style={styles.container}>
      <DettaglioPokemonCard pokemon={dettaglio} />
    </View>
  );
};
