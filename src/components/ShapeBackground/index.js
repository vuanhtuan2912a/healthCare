import { StyleSheet, View } from 'react-native';
import React from 'react';
import { HEIHGT, WIDTH } from '../../styles/global';

const ShapBackground = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(20, 193, 194, 0.2)',
        width: WIDTH + 190,
        height: HEIHGT / 2.4,
        borderRadius: 80,
        zIndex: -1,
        position: 'absolute',
        marginTop: WIDTH / 2.7,
        marginLeft: -(WIDTH / 2) + 100,
        transform: [{ rotate: '150deg' }],
      }}
    />
  );
};

export default ShapBackground;

const styles = StyleSheet.create({});
