import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';

const CategoryNews = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(
      'https://saurav.tech/NewsAPI/top-headlines/category/' +
        route.params.category +
        '/in.json',
    )
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
      <Text style={styles.headingText}>Headlines</Text>
      <View>
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
                  <Text style={styles.newsTitle}>
                    {item.title ? item.title.substring(0, 30) + '...' : '...'}
                  </Text>
                  <Text style={styles.newsDescription}>
                    {item.description
                      ? item.description.substring(0, 30) + '...'
                      : '...'}
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

export default CategoryNews;
