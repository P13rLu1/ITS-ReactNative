import {
  Text,
  TouchableHighlight,
  Vibration,
  Alert,
  Linking,
} from 'react-native';
import {dettaglioStyles} from '../../assets/dettaglio/dettaglioStyles.ts';

interface TelRedirectCardProps {
  tel: string;
  children: string;
}

export const TelRedirectCard = ({tel, children}: TelRedirectCardProps) => {
  return (
    <Text style={dettaglioStyles.contactText}>
      📱 {children}:{' '}
      <TouchableHighlight
        onPress={() => {
          Vibration.vibrate(100);
          Linking.openURL(`tel:${tel}`).catch(() => {
            Alert.alert('Errore', 'Impossibile aprire il link', [{text: 'OK'}]);
          });
        }}>
        <Text style={dettaglioStyles.contactLink}>{tel}</Text>
      </TouchableHighlight>
    </Text>
  );
};
