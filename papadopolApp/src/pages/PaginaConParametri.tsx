import {SafeAreaView, Text} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {StackParamList} from '../../App.tsx';

type Props = NativeStackScreenProps<StackParamList, 'PaginaConParametro'>;

function PaginaConParametri({route}: Props) {
  return (
    <>
      <SafeAreaView>
        <Text style={{color: 'black', padding: 20}}>Pagina Con Parametri</Text>
        <Text style={{color: 'black', padding: 20}}>
          Parametro Ricevuto: {route.params.testo}
        </Text>
      </SafeAreaView>
    </>
  );
}

export default PaginaConParametri;
