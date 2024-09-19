import {PokemonDetail} from '../types/pokemonType.ts';
import {Text, View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../assets/dettaglio/dettaglioStile.ts'; // Importa gli stili

interface Props {
  pokemon: PokemonDetail;
}

export function DettaglioPokemonCard({pokemon}: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.detailContainer}
      showsVerticalScrollIndicator={false}>
      <FastImage
        source={{uri: pokemon.sprites.other['showdown'].front_default}}
        style={styles.pokemonImage}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.pokemonName}>{pokemon.name.toUpperCase()}</Text>

      <Text style={styles.sectionTitle}>Tipo:</Text>
      <View style={styles.typeContainer}>
        {pokemon.types.map(type => (
          <Text key={type.type.name} style={styles.typeText}>
            {type.type.name}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Caratteristiche</Text>
      <Text style={styles.characteristicText}>
        {(pokemon.weight / 10).toFixed(1)}kg
      </Text>
      <Text style={styles.characteristicText}>
        {(pokemon.height / 10).toFixed(1)}m
      </Text>

      <Text style={styles.sectionTitle}>Statistiche</Text>
      <View style={styles.statsContainer}>
        {pokemon.stats.map(stat => (
          <View key={stat.stat.name} style={styles.statItem}>
            <Text style={styles.statText}>
              {stat.stat.name}: {stat.base_stat}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
