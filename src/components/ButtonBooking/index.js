import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import React from 'react';
import { color } from '../../styles/color';
import { textGlobal } from '../../textGlobal';
import { stylesButonBooking } from '../../styles/Button';

const ButtonBooking = ({ onPress = () => {} }) => {
  return (
    <Pressable
      style={stylesButonBooking.containerButtonBooking}
      onPress={onPress}>
      <View style={stylesButonBooking.coverIcon}>
        <Image
          style={stylesButonBooking.icon}
          tintColor={color.white}
          source={require('../../assets/icons/add-calendar.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={stylesButonBooking.contentButtonBooking}>
        {textGlobal.BOOKING_NOW}
      </Text>
    </Pressable>
  );
};

export default ButtonBooking;

const styles = StyleSheet.create({});
