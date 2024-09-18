import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Elenco from './src/pages/Elenco.tsx';
import Dettaglio from './src/pages/Dettaglio.tsx';
import {Utente} from './src/types/utente.ts';

export type StackParamList = {
  Elenco: undefined;
  Dettaglio: {
    utente: Utente;
  };
};

const configOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'black'},
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Elenco'}
        screenOptions={{animation: 'slide_from_bottom'}}>
        <Stack.Screen
          name="Elenco"
          component={Elenco}
          options={{...configOptions, headerTitle: 'Elenco Degli User 👤'}}
        />
        <Stack.Screen
          name="Dettaglio"
          component={Dettaglio}
          options={{...configOptions, headerTitle: 'Dettaglio Utente 🧐'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
