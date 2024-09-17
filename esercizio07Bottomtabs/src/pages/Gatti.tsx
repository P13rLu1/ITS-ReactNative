import {Image, SafeAreaView, Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Animale} from '../types/animali.ts';
import AnimaliStyle from '../components/AnimaliStyle.ts';

function Gatti() {
  const url =
    'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
  const [gatto, setGatti] = useState<Animale>();

  function getGatti() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setGatti(data[0]);
      });
  }

  useEffect(() => {
    getGatti();
  }, []);

  return (
    <>
      <SafeAreaView style={AnimaliStyle.container}>
        {gatto && (
          <View style={AnimaliStyle.card}>
            <Image
              source={{uri: gatto.url}}
              style={AnimaliStyle.image}
              resizeMode={'contain'}
            />
            <TouchableOpacity onPress={() => {
              getGatti();
              Vibration.vibrate(100);
            }} style={AnimaliStyle.button}>
              <Text style={AnimaliStyle.buttonText}>Prendi Un Altro Gatto</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

export default Gatti;
