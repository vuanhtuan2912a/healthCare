import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';

const ButtonCustom = ({
  content,
  backgroundColor,
  paddingHorizontal = 15,
  borderRadius = 6,
  borderWidth = 0,
  borderColor = color.topaz,
  height = stylesForMultipleDevice.heightButton,
  width = '100%',
  justifyContent = 'center',
  textColor = color.white,
  textSize = 13,
  alignItems = 'flex-start',
  onPress = () => {},
  marginTop = 10,
}) => {
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: paddingHorizontal }}
      onPress={onPress}>
      <View
        style={{
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          width: width,
          height: height,
          justifyContent: justifyContent,
          alignItems: alignItems,
          paddingHorizontal: paddingHorizontal,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          marginTop: marginTop,
        }}>
        <Text style={{ color: textColor, fontSize: textSize }}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
