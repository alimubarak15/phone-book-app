import React from 'react';
import {View, Text, SafeAreaView, StatusBar, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailItem from '../components/DetailItem';
import {color} from '../constants';

export default function UserInfo({navigation}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 8,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left-thick"
            size={30}
            color={color.theme}
          />
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="power-settings"
          size={30}
          color={color.theme}
        />
      </View>
      <View
        style={{
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 50, marginVertical: 30}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Mubarak Ali</Text>
          <Text style={{fontSize: 14, color: '#444'}}>Mobile Engineer</Text>
        </View>
        <View style={{marginTop: 30}}>
          <Image
            source={require('../assets/image/ali.jpg')}
            style={{
              width: 200,
              height: 200,
              borderRadius: 40,
              marginRight: 20,
            }}
          />
        </View>
      </View>
      <View>
        <DetailItem
          text="+62 85641448290"
          icon="cellphone-android"
          color="#aaa"
        />
        <DetailItem
          text="Sincereswadeinsky@gmail.biz"
          icon="mail"
          color="#aaa"
        />
        <DetailItem
          text="New York City, United State America"
          icon="home"
          color="#aaa"
        />
        <DetailItem text="Sincereswadeinsky.com" icon="web" color="#aaa" />
        <DetailItem text="Weekend Inc" icon="office-building" color="#aaa" />
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingVertical: 16,
          backgroundColor: color.theme,
          borderRadius: 14,
          marginTop: 60,
        }}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
          UPDATE
        </Text>
      </View>
    </View>
  );
}
