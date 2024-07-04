import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/global';

const SquareQrCode = () => {
  return (
    <View
      style={[
        styles.border,
        {
          width: 200,
          height: 200,
        },
      ]}>
      <View style={[styles.corner, styles.topLeft]} />
      <View style={[styles.corner, styles.topRight]} />
      <View style={[styles.corner, styles.bottomLeft]} />
      <View style={[styles.corner, styles.bottomRight]} />
    </View>
  );
};

export default SquareQrCode;
