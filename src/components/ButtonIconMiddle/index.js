import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { color } from '../../styles/color';
import { textGlobal } from '../../textGlobal';
import { stylesButtonIconMiddle } from '../../styles/Button';

const ButtonIconMiddle = ({
  uri = require('../../assets/icons/home_bottom_bar.png'),
  content = textGlobal.HOME,
  textColor = color.carbonGrey,
}) => {
  return (
    <View style={stylesButtonIconMiddle.container}>
      <View style={stylesButtonIconMiddle.childrenContainer}>
        <View style={stylesButtonIconMiddle.coverIcon}>
          <Image
            style={stylesButtonIconMiddle.icon}
            source={uri}
            tintColor={color.white}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={[stylesButtonIconMiddle.content, { color: textColor }]}>
        {content}
      </Text>
    </View>
  );
};

export default ButtonIconMiddle;
