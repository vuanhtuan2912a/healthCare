import React from 'react';
import { Text, View } from 'react-native';
import { color } from '../../styles/color';
import { textGlobal } from '../../textGlobal';
import Avatar from '../Avatar';

const HeaderWithAvatar = ({ paddingTop = Platform.OS === 'ios' ? 54 : 5 }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        paddingTop: paddingTop,
        paddingBottom: 54,
        backgroundColor: color.peacockBlue,
      }}>
      <Avatar />
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
          {textGlobal.INTRO_HEADER_TEXT}
        </Text>
        <Text style={{ color: color.white, fontSize: 13, marginLeft: 15 }}>
          {textGlobal.INTRO_SUB_HEADER_TEXT}
        </Text>
      </View>
    </View>
  );
};

export default HeaderWithAvatar;
