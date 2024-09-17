import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gatti from './src/pages/Gatti.tsx';
import Cani from './src/pages/Cani.tsx';
import {Text, Vibration} from 'react-native';
import tabBarLabel from './src/components/tabBarLabel.ts';

type TabsParamList = {
  Gatti: undefined;
  Cani: undefined;
};

function App(): React.JSX.Element {
  const Tabs = createBottomTabNavigator<TabsParamList>();

  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName={'Gatti'}>
        <Tabs.Screen
          options={{
            headerTitle: 'Gatti 🐈',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            tabBarStyle: {backgroundColor: 'black'},
            tabBarIcon: () => <Text>🐱</Text>,
            tabBarLabelStyle: tabBarLabel.stile,
            tabBarIconStyle: {fontWeight: "heavy"},
          }}
          name="Gatti"
          component={Gatti}
          listeners={() => ({
            tabPress: () => {
              Vibration.vibrate(24);
            },
          })}
        />
        <Tabs.Screen
          options={{
            headerTitle: 'Cani 🐩',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            tabBarStyle: {backgroundColor: 'black'},
            tabBarIcon: () => <Text>🐶</Text>,
            tabBarLabelStyle: tabBarLabel.stile,
          }}
          name="Cani"
          component={Cani}
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
