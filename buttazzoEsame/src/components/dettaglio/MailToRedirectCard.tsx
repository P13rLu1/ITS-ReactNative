import {
  Alert,
  Linking,
  Text,
  TouchableHighlight,
  Vibration,
} from 'react-native';
import {dettaglioStyles} from '../../assets/dettaglio/dettaglioStyles.ts';

interface MailToRedirectCardProps {
  email: string;
  children: string;
}

interface MailToRedirectCardProps {
  email: string;
  children: string;
}

export const MailToRedirectCard = ({
  email,
  children,
}: MailToRedirectCardProps) => {
  return (
    <Text style={dettaglioStyles.contactText}>
      📧 {children}:{' '}
      <TouchableHighlight
        onPress={() => {
          Vibration.vibrate(100);
          Linking.openURL(`mailto:${email}`).catch(() => {
            Alert.alert('Errore', 'Impossibile aprire il link');
          });
        }}>
        <Text style={dettaglioStyles.contactLink}>{email}</Text>
      </TouchableHighlight>
    </Text>
  );
};
