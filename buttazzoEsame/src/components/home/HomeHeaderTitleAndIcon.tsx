import {Image, Text, View} from 'react-native';
import {styles} from '../../assets/elenco/elencoStyle.ts';
import React from 'react';

export const HomeHeaderTitleAndIcon = () => {
  return (
    <View style={{flexDirection: "row",}}>
      <Text style={{...styles.nameText,paddingVertical: 5}}>Palazzo Vernazzo{'  '}</Text>
      <Image
        source={{
          uri: 'https://www.palazzovernazza.it/wp-content/uploads/2020/09/fda6245b-c29b-4a65-9bf9-0d0836681551-370x260.jpeg',
        }}
        height={32}
        width={32}
        style={{borderRadius: 16}}
      />
    </View>
  );
}
