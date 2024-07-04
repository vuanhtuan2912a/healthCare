import { Image, Text, View } from 'react-native';
import React from 'react';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';

const InformationsOfPatient = ({ icon, content, marginBottom }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: marginBottom,
      }}>
      <Image
        style={{ width: 18, height: 18, marginLeft: 15 }}
        source={icon}
        tintColor={color.carbonGrey}
        resizeMode="contain"
      />
      <View
        style={{
          marginLeft: 15,
          justifyContent: 'center',
          maxWidth: '80%',
        }}>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize - 1.5,
            color: color.carbonGrey,
            marginTop: 1,
          }}>
          {content}
        </Text>
      </View>
    </View>
  );
};

export default InformationsOfPatient;
