import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/pages/Home.tsx';
import {Alunni} from './src/pages/Alunni.tsx';
import { Text, Vibration} from 'react-native';
import {HomeHeaderTitleAndIcon} from './src/components/home/HomeHeaderTitleAndIcon.tsx';

export type TabsParamList = {
  Home: undefined;
  Alunni: undefined;
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
    <>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName={'Home'}>
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              ...configOptions,
              headerTitle: () => (
                <HomeHeaderTitleAndIcon />
              ),
              tabBarIcon: () => <Text>🏠</Text>,
            }}
            listeners={() => ({
              tabPress: () => {
                Vibration.vibrate(24);
              },
            })}
          />
          <Tabs.Screen
            name="Alunni"
            component={Alunni}
            options={{
              ...configOptions,
              tabBarIcon: () => <Text>🫂</Text>,
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
    </>
  );
}

export default App;
