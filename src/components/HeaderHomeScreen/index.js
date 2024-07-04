import { Platform, Text, View } from 'react-native';
import React from 'react';
import Avatar from '../Avatar';
import { textGlobal } from '../../textGlobal';
import { color } from '../../styles/color';

const HeaderHomeScreen = ({
  avatarUri = require('../../assets/images/logo.png'),
  id = '123456',
  fullName = 'Nguyễn Văn A',
  paddingTop = Platform.OS === 'ios' ? 57 : 10,
  paddingBottom = Platform.OS === 'ios' ? 50 : 54,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        paddingTop: paddingTop,
        backgroundColor: color.peacockBlue,
        paddingBottom: paddingBottom,
      }}>
      <Avatar uri={avatarUri} />
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text
          style={{
            color: color.white,
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15,
            marginBottom: 5,
          }}>
          {textGlobal.HELLO + ` ${fullName}`}
        </Text>
        <Text style={{ color: color.white, fontSize: 13, marginLeft: 15 }}>
          {textGlobal.ID + `: ${id}`}
        </Text>
      </View>
    </View>
  );
};

export default HeaderHomeScreen;
