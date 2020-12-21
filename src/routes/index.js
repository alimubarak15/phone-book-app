import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import DetailUser from '../screen/DetailUser';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
