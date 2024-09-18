import {Alert, Linking, Text, TouchableOpacity, Vibration} from 'react-native';
import {OpenURLButtonStyle} from '../../assets/openUrlButtonStyle.ts';

interface OpenURLButtonProps {
  url: string;
  children: string;
}

export const OpenURLButton = ({url, children}: OpenURLButtonProps) => {

  return (
    <TouchableOpacity
      style={OpenURLButtonStyle.button}
      onPress={() => {
        Vibration.vibrate(100);
        Linking.openURL(url).catch(() => {
          Alert.alert('Errore', 'Impossibile aprire il link');
        });
      }}>
      <Text style={OpenURLButtonStyle.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
