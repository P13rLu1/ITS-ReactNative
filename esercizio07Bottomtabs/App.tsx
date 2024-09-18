import React from 'react';
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gatti from './src/pages/Gatti.tsx';
import Cani from './src/pages/Cani.tsx';
import {Text, Vibration} from 'react-native';
import tabBarLabel from './src/components/tabBarLabel.ts';
import {NavigationContainer} from '@react-navigation/native';

type TabsParamList = {
  Gatti: undefined;
  Cani: undefined;
};

const configOptions: BottomTabNavigationOptions = {
  headerTitle: 'Gatti 🐈',
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'black'},
  tabBarStyle: {backgroundColor: 'black'},
  tabBarIcon: () => <Text>🐱</Text>,
  tabBarLabelStyle: tabBarLabel.stile,
  tabBarIconStyle: {fontWeight: 'heavy'},
};

function App(): React.JSX.Element {
  const Tabs = createBottomTabNavigator<TabsParamList>();

  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName={'Gatti'}>
        <Tabs.Screen
          options={configOptions}
          name="Gatti"
          component={Gatti}
          listeners={() => ({
            tabPress: () => {
              Vibration.vibrate(24);
            },
          })}
        />
        <Tabs.Screen
          options={configOptions}
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
