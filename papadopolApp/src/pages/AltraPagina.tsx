import {SafeAreaView, Text} from 'react-native';
import React from 'react';

function AltraPagina(): React.JSX.Element {
  return (
    <>
      <SafeAreaView>
        <Text style={{color: 'black', padding: 20}}>
          Sono In Un'Altra Pagina
        </Text>
      </SafeAreaView>
    </>
  );
}

export default AltraPagina;
