import React, {useEffect} from 'react';
import {View, Text, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import {color, mock} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListUser from '../components/ListUser';
import {fetchUserData} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const user = useSelector((state) => state);
  //   console.log(user.data);
  return (
    <View style={{flex: 1, backgroundColor: color.theme}}>
      <StatusBar barStyle="light-content" backgroundColor={color.theme} />
      <SafeAreaView>
        <View>
          <View style={{backgroundColor: color.theme}}>
            <View
              style={{
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <MaterialCommunityIcons name="text" size={30} color="#fff" />
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={30}
                  color="#fff"
                />
                <FontAwesome name="user-o" size={30} color="#fff" />
              </View>
            </View>
            <View style={{padding: 16}}>
              <Text style={{color: color.white, fontSize: 30}}>
                {'Hello, \nMubarak Ali'}
              </Text>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: color.tint,
                  borderRadius: 20,
                  marginVertical: 20,
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="magnify"
                  size={30}
                  style={{color: color.white}}
                />
                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="microphone"
                    size={30}
                    style={{color: color.white}}
                  />
                  <MaterialCommunityIcons
                    name="tune"
                    size={30}
                    style={{color: color.white}}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderTopStartRadius: 24,
              flexDirection: 'row',
              padding: 15,
              backgroundColor: color.backgroud,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 30,
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: color.tint}}>
              Subscriptions
            </Text>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: color.tint,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="plus"
                style={{
                  color: color.white,
                  fontSize: 30,
                }}
              />
            </View>
          </View>
          <ScrollView
            style={{
              backgroundColor: color.backgroud,
              height: 520,
            }}>
            {user.data.map((data) => (
              <ListUser
                key={data.id}
                uid={data.id}
                icon="face"
                name={data.name}
                email={data.email}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
