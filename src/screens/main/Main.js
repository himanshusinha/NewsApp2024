import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Main = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json')
      .then(res => res.json())
      .then(output => {
        console.log(output);
        setNews(output.articles);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'black'}
        barStyle={'light-content'}
      />
      <Text style={styles.headingText}>Categories</Text>
      <View style={styles.categoryContainer}>
        <FlatList
          data={[
            {
              title: 'technology',
              image: require('../../assets/images/tech.webp'),
            },
            {
              title: 'health',
              image: require('../../assets/images/health.jpeg'),
            },
            {
              title: 'business',
              image: require('../../assets/images/business.jpeg'),
            },
          ]}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => {
                  navigation.navigate('CategoryNews', {
                    category: item.title,
                  });
                }}>
                <View style={styles.categoryItem}>
                  <Image source={item.image} style={styles.categoryImage} />
                  <View style={styles.categoryOverlay}>
                    <Text style={styles.categoryText}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.headingText}>Headlines</Text>
      <View style={styles.headlinesContainer}>
        <FlatList
          data={news}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.newsItem}
                onPress={() => {
                  navigation.navigate('NewsDetails', {
                    data: item,
                  });
                }}>
                <Image
                  source={{uri: item.urlToImage}}
                  style={styles.newsImage}
                />
                <View style={styles.newsTextContainer}>
                  <Text style={styles.newsTitle}>{item.title}</Text>
                  <Text style={styles.newsDescription}>
                    {item.description.substring(0, 30) + '...'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Main;
