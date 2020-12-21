import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailItem({text, color, icon}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
      }}>
      <MaterialCommunityIcons
        name={icon ? icon : 'cellphone-android'}
        size={25}
        color={color}
      />

      <Text style={{marginLeft: 20}}>{text}</Text>
    </View>
  );
}
