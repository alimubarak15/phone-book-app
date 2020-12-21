/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {fetchUserData} from './redux/actions';
import {store} from './redux/store';
import {color, mock} from './constants';
import Home from './screen/Home';
import DetailUser from './screen/DetailUser';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
