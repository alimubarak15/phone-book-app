import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {color} from '../constants';
import UserInfo from '../containers/UserInfo';

export default function DetailUser({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: 20,
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={color.theme} />
      <SafeAreaView>
        <UserInfo navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}
