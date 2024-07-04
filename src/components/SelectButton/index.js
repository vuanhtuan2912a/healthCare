import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { stylesForMultipleDevice } from '../../styles/global';
import { color } from '../../styles/color';

const SelectButton = ({
  onPress = () => {},
  backgroundColor = color.topaz,
  content = 'CCCD',
  textColor = color.black,
  fontSize = stylesForMultipleDevice.fontSize,
  justifyContent = 'center',
  alignItems = 'center',
  borderColor = color.topaz,
  borderWidth = 1,
  borderTopLeftRadius = 6,
  borderBottomLeftRadius = 6,
  borderTopRightRadius = 6,
  borderBottomRightRadius = 6,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: '42%',
        height: stylesForMultipleDevice.heightButton,
        backgroundColor: backgroundColor,
        justifyContent: justifyContent,
        alignItems: alignItems,
        borderWidth: borderWidth,
        borderTopLeftRadius: borderTopLeftRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        borderColor: borderColor,
      }}>
      <Text style={{ color: textColor, fontSize: fontSize }}>{content}</Text>
    </Pressable>
  );
};

export default SelectButton;

const styles = StyleSheet.create({});
