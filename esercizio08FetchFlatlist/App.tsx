import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Elenco from './src/pages/Elenco.tsx';
import Dettaglio from './src/pages/Dettaglio.tsx';

type StackParamList = {
  Elenco: undefined;
  Dettaglio: undefined; //todo
};

const configOptions: NativeStackNavigationOptions = {
  headerTitle: 'Elenco Degli User 👤',
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'black'},
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Elenco"
          component={Elenco}
          options={configOptions}
        />
        <Stack.Screen name="Dettaglio" component={Dettaglio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
