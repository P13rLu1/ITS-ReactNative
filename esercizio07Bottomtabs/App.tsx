import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gatti from './src/pages/Gatti.tsx';
import Cani from './src/pages/Cani.tsx';

type TabsParamList = {
  Gatti: undefined;
  Cani: undefined;
};

function App(): React.JSX.Element {
  const Tabs = createBottomTabNavigator<TabsParamList>();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Gatti" component={Gatti} />
        <Tabs.Screen name="Cani" component={Cani} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
