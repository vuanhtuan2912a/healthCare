import React from 'react';
import { Alert } from 'react-native';

const AlertCustom = ({ message, onPress = () => {} }) => {
  return Alert.alert('', message, [
    {
      text: 'OK',
      onPress: onPress,
    },
  ]);
};

export default AlertCustom;
