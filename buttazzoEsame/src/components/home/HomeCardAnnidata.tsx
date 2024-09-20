import {CurrentWeather} from '../../types/weather.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../assets/home/homeStyle.ts';

export function HomeCard(props: {
  meteo: CurrentWeather | null;
  onPress: () => void;
  onPress1: () => void;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Palazzo Vernazzo</Text>
      <Text style={styles.meteoText}>
        Oggi Il Meteo A Palazzo Vernazzo è: {'\n'}
        {props.meteo
          ? `Temperatura 🌡️: ${props.meteo.temperature}°C\n Vento 💨: ${props.meteo.windspeed} km/h`
          : 'Caricamento...'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>Vai alla Lista Degli Alunni</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={props.onPress1}>
        <Text style={styles.buttonText}>Visita Palazzo Vernazza</Text>
      </TouchableOpacity>
    </View>
  );
}
