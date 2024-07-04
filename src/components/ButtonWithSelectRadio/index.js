import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';
import { textGlobal } from '../../textGlobal';
import { stylesButtonWithSelectRadio } from '../../styles/Button';

const ButtonWithSelectRadio = ({
  content = textGlobal.CHOOSE_SPECIALTY,
  onPress = () => {},
  selected = false,
}) => {
  return (
    <Pressable style={stylesButtonWithSelectRadio.container} onPress={onPress}>
      <View
        style={[
          stylesButtonWithSelectRadio.coverRadio,
          {
            borderColor: selected ? color.topaz : color.carbonGrey,
            backgroundColor: selected ? color.topaz : color.white,
          },
        ]}>
        <View
          style={[
            stylesButtonWithSelectRadio.childrenRadio,
            {
              borderColor: color.white,
              backgroundColor: selected ? color.topaz : color.white,
            },
          ]}
        />
      </View>
      <Text style={stylesButtonWithSelectRadio.content}>{content}</Text>
    </Pressable>
  );
};

export default ButtonWithSelectRadio;
