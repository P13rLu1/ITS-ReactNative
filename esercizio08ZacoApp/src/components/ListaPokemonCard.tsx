import {Image, Text, TouchableOpacity, Vibration} from 'react-native';
import styles from '../assets/elenco/elencoStile.ts'; // Importa gli stili

interface Props {
  name: string;
  index: number;
  apriDettaglio: () => void;
}

export function ListaPokemonCard({name, index, apriDettaglio}: Props) {
  const urlImg =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        apriDettaglio();
        Vibration.vibrate(100);
      }}>
      <Text style={styles.pokemonName}>{name}</Text>
      <Image
        source={{
          uri: urlImg + index + '.png',
        }}
        style={styles.pokemonImage}
      />
    </TouchableOpacity>
  );
}
