// MainStyles.js

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
  },
  headingText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    marginTop: 20,
  },
  categoryContainer: {
    marginTop: 20,
    height: 170,
  },
  categoryItem: {
    width: 200,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  categoryOverlay: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  headlinesContainer: {
    marginTop: 20,
  },
  newsItem: {
    borderColor: '#fff',
    borderWidth: 1,
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsImage: {
    width: 100,
    height: 90,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  newsTextContainer: {
    padding: 10,
  },
  newsTitle: {
    color: '#fff',
    width: '45%',
    fontSize: 16,
    fontWeight: '700',
  },
  newsDescription: {
    color: '#fff',
    width: '70%',
    fontSize: 12,
    marginTop: 10,
  },
});
