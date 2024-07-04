import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { textGlobal } from '../../textGlobal';
import { color } from '../../styles/color';
import ShapBackground from '../ShapeBackground';

const Package = () => {
  const data = [
    {
      icon: require('../../assets/icons/packages.png'),
      name: textGlobal.PACKAGES,
    },
    {
      icon: require('../../assets/icons/community_sub.png'),
      name: textGlobal.COMMUNITY_ASK_SUB,
    },
    {
      icon: require('../../assets/icons/tele_health.png'),
      name: textGlobal.TELE_HEALTH,
    },
    {
      icon: require('../../assets/icons/guide_appointment.png'),
      name: textGlobal.GUIDE_BOOKING_APPOINTMENT,
    },
    {
      icon: require('../../assets/icons/laboratory_at_home.png'),
      name: textGlobal.LABORATORY_AT_HOME,
    },
    {
      icon: require('../../assets/icons/hotline.png'),
      name: textGlobal.HOT_LINE_CONNECT,
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
          <View
            key={index}
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
          </View>
        );
      })}
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({});
