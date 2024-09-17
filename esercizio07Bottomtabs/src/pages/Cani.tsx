import {Image, SafeAreaView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Animale} from '../types/animali.ts';
import AnimaliStyle from '../components/AnimaliStyle.ts';

function Gatti() {
  const url =
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
  const [cane, setCane] = useState<Animale>();

  function getCane() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCane(data[0]);
      });
  }

  useEffect(() => {
    getCane();
  }, []);

  return (
    <>
      <SafeAreaView style={AnimaliStyle.container}>
        {cane && (
          <View style={AnimaliStyle.card}>
            <Image
              source={{uri: cane.url}}
              style={AnimaliStyle.image}
              resizeMode={"contain"}
            />
            <TouchableOpacity onPress={() => {
              getCane();
              Vibration.vibrate(100);
            }} style={AnimaliStyle.button}>
              <Text style={AnimaliStyle.buttonText}>Prendi Un Altro Cane</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

export default Gatti;
