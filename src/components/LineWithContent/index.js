import { Text, View } from 'react-native';
import React from 'react';
import { color } from '../../styles/color';

const LineWithContent = ({
  content,
  textColor = color.lightGrey,
  textSize = 13,
  width = '35%',
  borderColor = color.lightGrey,
  borderBottomWidth = 0.5,
  paddingHorizontal = 15,
  marginTop = 15,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: paddingHorizontal,
        marginVertical: 5,
        marginTop: marginTop,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: width,
          width: '100%',
          marginVertical: 5,
        }}>
        <View
          style={{
            borderBottomWidth: borderBottomWidth,
            borderWidth: borderBottomWidth,
            borderColor: borderColor,
            width: width,
          }}
        />
        <Text style={{ color: textColor, fontSize: textSize }}>{content}</Text>
        <View
          style={{
            width: width,
            borderWidth: borderBottomWidth,
            borderBottomWidth: borderBottomWidth,
            borderColor: borderColor,
          }}
        />
      </View>
    </View>
  );
};

export default LineWithContent;
