import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import { textGlobal } from '../../textGlobal';
import { color } from '../../styles/color';
import ShapBackground from '../ShapeBackground';
import { useNavigation } from '@react-navigation/native';

const Package = ({ isAuth }) => {
  const navigation = useNavigation();
  const data = [
    {
      icon: require('../../assets/icons/packages.png'),
      name: textGlobal.PACKAGES,
      screen: 'WebViewCustom',
      uri: 'https://bvbinhdan.com.vn/vn/dich-vu.html',
    },
    {
      icon: require('../../assets/icons/community_sub.png'),
      name: textGlobal.COMMUNITY_ASK_SUB,
      screen: 'WebViewCustom',
      uri: 'https://bvbinhdan.com.vn/vn/dich-vu.html',
    },
    {
      icon: require('../../assets/icons/tele_health.png'),
      name: textGlobal.TELE_HEALTH,
      screen: 'WebViewCustom',
      uri: 'https://bvbinhdan.com.vn/vn/dich-vu.html',
    },
    {
      icon: require('../../assets/icons/guide_appointment.png'),
      name: textGlobal.GUIDE_BOOKING_APPOINTMENT,
      screen: 'WebViewCustom',
      uri: 'https://bvbinhdan.com.vn/vn/dich-vu.html',
    },
    {
      icon: require('../../assets/icons/laboratory_at_home.png'),
      name: textGlobal.LABORATORY_AT_HOME,
      screen: 'WebViewCustom',
      uri: 'https://bvbinhdan.com.vn/vn/dich-vu.html',
    },
    {
      icon: require('../../assets/icons/hotline.png'),
      name: textGlobal.HOT_LINE_CONNECT,
      screen: 'WebViewCustom',
      uri: 'https://bvbinhdan.com.vn/vn/lien-he.html',
    },
  ];

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {data.map((item, index) => {
        return (
          <Pressable
            key={index}
            onPress={() =>
              isAuth
                ? Alert.alert('', 'Vui lòng đăng nhập để chọn chức năng này.', [
                    {
                      text: 'Đăng nhập',
                      onPress: () => navigation.navigate('SignIn'),
                      style: 'OK',
                    },
                  ])
                : navigation.navigate(item.screen, {
                    uri: item?.uri,
                    headerName: item?.name,
                  })
            }
            style={{
              flexDirection: 'row',
              backgroundColor: color.white,
              borderRadius: 6,
              padding: 10,
              alignItems: 'center',
              width: '46%',
              height: 65,
              marginTop: 15,
              shadowColor: color.carbonGrey,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.35,
              shadowRadius: 2,
              elevation: 2,
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginLeft: 10,
              }}
              source={item.icon}
              resizeMode="contain"
            />
            <View
              style={{
                maxWidth: '65%',
                marginLeft: 10,
              }}>
              <Text>{item.name}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({});
