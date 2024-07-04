import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';

const TextButton = ({
  content,
  paddingHorizontal = 15,
  textColor = color.white,
  textSize = stylesForMultipleDevice.fontSize,
  onPress = () => {},
  contentNoHightLight,
  marginTop = 15,
  fontWeight = 'bold',
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: paddingHorizontal,
        flexDirection: 'row',
        marginTop: marginTop,
        justifyContent: 'center',
      }}
      onPress={onPress}>
      {contentNoHightLight && (
        <Text style={{ fontSize: textSize }}>{contentNoHightLight}</Text>
      )}
      <Text
        style={{
          color: textColor,
          fontSize: textSize,
          fontWeight: fontWeight,
        }}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
