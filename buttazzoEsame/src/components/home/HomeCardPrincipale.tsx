import {CurrentWeather} from '../../types/weather.ts';
import FastImage from 'react-native-fast-image';
import {styles} from '../../assets/home/homeStyle.ts';
import {HomeCard} from './HomeCardAnnidata.tsx';
import {Switch, Text, View} from 'react-native';
import {useState} from 'react';

export function HomeCardPrincipale(props: {
  meteo: CurrentWeather | null;
  onPress: () => void;
  onPress1: () => void;
}) {
  const imgUrl =
    'https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif';
  const imgUrl2 =
    'https://i.pinimg.com/originals/06/60/ef/0660efe82fa3da42ed56eef013171835.gif';

  const [isFirstImage, setIsFirstImage] = useState(true);

  // Cambia l'immagine in base al valore del booleano
  const imgUsing = isFirstImage ? imgUrl : imgUrl2;

  return (
    <>
      <FastImage
        source={{
          uri: imgUsing,
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <HomeCard
        meteo={props.meteo}
        onPress={props.onPress}
        onPress1={props.onPress1}
      />
      {/* View container per testo e switch sulla stessa riga */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Cambia immagine</Text>
        <Switch
          value={isFirstImage}
          onValueChange={() => setIsFirstImage(previousState => !previousState)}
          style={styles.switch}
          thumbColor={'#20C20E'}
          trackColor={{false: '#007bff', true: '#17a2b8'}}
        />
      </View>
    </>
  );
}
