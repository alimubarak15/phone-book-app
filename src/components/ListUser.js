import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {color} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListUser({name, email, uid, icon, navigation}) {
  return (
    <View
      style={{
        backgroundColor: color.theme,
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name={icon}
          size={40}
          color="#fff"
          style={{flex: 0.15}}
        />
        <View style={{marginLeft: 16, flex: 0.8}}>
          <Text style={{fontSize: 16, color: color.white, fontWeight: 'bold'}}>
            {name}
          </Text>
          <Text style={{color: '#eee'}}>{email}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.push('Details')}>
          <MaterialCommunityIcons
            name="card-account-details"
            size={30}
            color="#fff"
            style={{flex: 0.1}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
