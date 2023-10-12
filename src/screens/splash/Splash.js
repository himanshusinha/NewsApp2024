// Splash.js

import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'black'}
        barStyle={'light-content'}
      />
      <Text style={[styles.text, styles.textBlack]}>NewsApp</Text>
      <Text style={[styles.text, styles.textRed]}> 24</Text>
    </View>
  );
};

export default Splash;
