import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Elenco} from './Elenco.tsx';
import {Dettaglio} from './Dettaglio.tsx';

export type StackParamList = {
  Elenco: undefined;
  Dettaglio: {
    url: string;
  };
};

const configOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'black'},
};

export const Pokemon = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <Stack.Navigator initialRouteName={'Elenco'}>
      <Stack.Screen
        name="Elenco"
        component={Elenco}
        options={{...configOptions, headerTitle: 'Elenco Dei Pokemon 👾'}}
      />
      <Stack.Screen
        name="Dettaglio"
        component={Dettaglio}
        options={{...configOptions, headerTitle: 'Dettaglio Del Pokemon 🧐'}}
      />
    </Stack.Navigator>
  );
};
