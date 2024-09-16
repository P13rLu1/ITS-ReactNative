import React from 'react';
import {Text, FlatList, ListRenderItemInfo, SafeAreaView} from 'react-native';
import style from './src/components/style.ts';
import Separator from './src/components/Separator.tsx';
import Header from './src/components/Header.tsx';
import Footer from './src/components/Footer.tsx';

const App = () => {
  const array = [
    'Sara',
    'Giuseppe',
    'Mario',
    'Luigi',
    'Giovanni',
    'Antonio',
    'Giovanna',
    'Maria',
    'Giovanni',
    'Antonio',
    'Giovanna',
    'Maria',
    'Giovanni',
    'Antonio',
    'Giovanna',
    'Maria',
    'Giovanni',
    'Antonio',
    'Giovanna',
    'Filippo',
    'Pinco',
    'Pallino',
    'Giovanni',
    'Antonio',
    'Mirko',
    'Giovanna',
    'Maria',
    'Giovanni',
    'Antonio',
    'Giovanna',
    'Maria',
    'Giovanni',
    'Antonio',
  ];

  const renderItem = ({item}: ListRenderItemInfo<string>) => {
    return <Text style={style.item}>{item}</Text>;
  };

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={array}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
