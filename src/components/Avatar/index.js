import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../../styles/color';

const Avatar = ({
  avatarSize = 50,
  uri = require('../../assets/images/logo.png'),
}) => {
  return (
    <View
      style={{
        width: avatarSize,
        height: avatarSize,
        backgroundColor: color.white,
        borderRadius: avatarSize,
      }}>
      <Image
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize,
        }}
        source={uri}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
