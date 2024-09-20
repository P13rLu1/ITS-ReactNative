import {Vibration, View, Linking} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabsParamList} from '../../App.tsx';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {styles} from '../assets/home/homeStyle.ts';
import {CurrentWeather, Weather} from '../types/weather.ts';
import {HomeCardPrincipale} from '../components/home/HomeCardPrincipale.tsx';

type Props = BottomTabNavigationProp<TabsParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<Props>();
  const [meteo, setMeteo] = useState<CurrentWeather | null>(null);
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=40.351516&longitude=18.174349&current_weather=true';

  const getMeteo = () => {
    fetch(url)
      .then(response => response.json())
      .then((data: Weather) => {
        setMeteo(data.current_weather);
      })
      .catch(error => {
        console.error('Errore nel caricamento del meteo', error);
      });
  };

  useEffect(() => {
    getMeteo();
  }, []);

  return (
    <View style={styles.container}>
      <HomeCardPrincipale
        meteo={meteo}
        onPress={() => {
          navigation.navigate('Alunni');
          Vibration.vibrate(24);
        }}
        onPress1={() => {
          Vibration.vibrate(24);
          Linking.openURL('https://www.palazzovernazza.it/').catch(() => {
            console.error('Errore nel caricamento del sito');
          });
        }}
      />
    </View>
  );
};
