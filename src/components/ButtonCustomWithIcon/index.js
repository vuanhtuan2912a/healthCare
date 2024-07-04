import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';

const ButtonCustomWithIcon = ({
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
  iconLeft,
  iconRight,
  iconSize = 15,
  tintColor = color.white,
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
          flexDirection: 'row',
        }}>
        {iconLeft && (
          <Image
            style={{ width: iconSize, height: iconSize }}
            source={iconLeft}
            tintColor={tintColor}
            resizeMode="contain"
          />
        )}
        <Text
          style={{
            color: textColor,
            fontSize: textSize,
            fontWeight: 'bold',
            marginHorizontal: 10,
          }}>
          {content}
        </Text>
        {iconRight && (
          <Image
            style={{ width: iconSize, height: iconSize }}
            source={iconRight}
            tintColor={tintColor}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustomWithIcon;
