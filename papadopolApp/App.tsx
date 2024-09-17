import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './src/pages/Homepage.tsx';
import AltraPagina from './src/pages/AltraPagina.tsx';
import PaginaConParametri from './src/pages/PaginaConParametri.tsx';

export type StackParamList = {
  Homepage: undefined;
  AltraPagina: undefined;
  PaginaConParametro: {testo: string};
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Homepage'}>
          <Stack.Screen name={'Homepage'} component={Homepage} />
          <Stack.Screen name={'AltraPagina'} component={AltraPagina} />
          <Stack.Screen
            name={'PaginaConParametro'}
            component={PaginaConParametri}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
