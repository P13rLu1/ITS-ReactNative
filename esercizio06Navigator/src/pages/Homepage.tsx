import React from 'react';
import {Button, SafeAreaView, Text, Vibration} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {StackParamList} from '../../App.tsx';

type Props = NativeStackScreenProps<StackParamList, 'Homepage'>;

function Homepage({navigation}: Props) {
  return (
    <>
      <SafeAreaView>
        <Text style={{color: 'black', padding: 20}}>Sono In Homepage</Text>
        <Button
          title={'Vai Ad Altra pagina'}
          onPress={() => {
            navigation.navigate('AltraPagina');
            Vibration.vibrate(24);
          }}
        />
        <Text style={{marginTop: 10, marginBottom: 10}} />
        <Button
          title={'Vai A Pagina Con Parametro'}
          onPress={() => {
            navigation.navigate('PaginaConParametro', {
              testo: 'Ciao Da Homepage',
            });
            Vibration.vibrate(24);
          }}
        />
      </SafeAreaView>
    </>
  );
}

export default Homepage;
