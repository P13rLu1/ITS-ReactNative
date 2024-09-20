import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Elenco} from './Elenco.tsx';
import {Dettaglio} from './Dettaglio.tsx';
import {Alunno} from '../types/alunno.ts';

export type StackParamList = {
  Elenco: undefined;
  Dettaglio: {
    Alunno: Alunno;
  };
}

const configOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'black'},
};

export const Alunni = () => {

  const Stack = createNativeStackNavigator<StackParamList>();

  return(
    <Stack.Navigator initialRouteName={'Elenco'}>
      <Stack.Screen
        name="Elenco"
        component={Elenco}
        options={{...configOptions, headerTitle: 'Elenco Degli Alunni 👥'}}
      />
      <Stack.Screen
        name="Dettaglio"
        component={Dettaglio}
        options={{...configOptions, headerTitle: 'Dettaglio Dell\'Alunno 🧐'}}
      />
    </Stack.Navigator>
  );
}
