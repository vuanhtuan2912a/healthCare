import { Image, Text, View } from 'react-native';
import React from 'react';
import { textGlobal } from '../../textGlobal';
import { color } from '../../styles/color';

const IconWithText = ({
  uri = require('../../assets/icons/home_bottom_bar.png'),
  content = textGlobal.HOME,
  iconColor = color.topaz,
  textColor = color.carbonGrey,
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{ width: 20, height: 20 }}
        source={uri}
        tintColor={iconColor}
        resizeMode="contain"
      />
      {content && (
        <Text style={{ fontSize: 10, marginTop: 5, color: textColor }}>
          {content}
        </Text>
      )}
    </View>
  );
};

export default IconWithText;
