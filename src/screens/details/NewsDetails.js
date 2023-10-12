import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';

const NewsDetails = () => {
  const route = useRoute();
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'black'}
          barStyle={'light-content'}
        />
        <Image
          source={{uri: route.params.data.urlToImage}}
          style={styles.image}
        />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.description}>{route.params.data.description}</Text>
        <Text style={styles.publishedAt}>{route.params.data.publishedAt}</Text>
        <Text style={styles.content}>{route.params.data.content}</Text>
      </View>
    </>
  );
};

export default NewsDetails;
