import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Homepage} from './src/pages/Homepage.tsx';
import {Text, Vibration} from 'react-native';
import {Pokemon} from './src/pages/Pokemon.tsx';

export type TabsParamList = {
  Homepage: undefined;
  Pokemon: undefined;
};

const configOptions: BottomTabNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'black'},
  tabBarStyle: {backgroundColor: 'black', borderTopWidth: 0},
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: {fontSize: 16},
};

function App(): React.JSX.Element {
  const Tabs = createBottomTabNavigator<TabsParamList>();

  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName={'Homepage'}>
        <Tabs.Screen
          name="Homepage"
          component={Homepage}
          options={{
            ...configOptions,
            headerTitle: 'Homepage 🏠',
            tabBarIcon: () => <Text>🏠</Text>,
          }}
          listeners={() => ({
            tabPress: () => {
              Vibration.vibrate(24);
            },
          })}
        />
        <Tabs.Screen
          name="Pokemon"
          component={Pokemon}
          options={{
            ...configOptions,
            tabBarIcon: () => <Text>👾</Text>,
            headerShown: false,
          }}
          listeners={() => ({
            tabPress: () => {
              Vibration.vibrate(24);
            },
          })}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
