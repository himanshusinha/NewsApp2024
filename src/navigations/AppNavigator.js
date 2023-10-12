import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ROUTES from '../constants/routes';
import {CategoryNews, Main, NewsDetails, Splash} from '../screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.MAIN}
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.NEWS_DETAILS}
          component={NewsDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.CATEGORY_NEWS}
          component={CategoryNews}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
