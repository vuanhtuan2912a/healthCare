import React from 'react';
import { Image, Text, View } from 'react-native';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';

const InformationsOfService = ({ uri, title, content, marginBottom = 15 }) => {
  if (!uri && !title && !content)
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: marginBottom,
        }}>
        <View
          style={{
            backgroundColor: color.topaz,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            width: 40,
            height: 40,
            marginLeft: 15,
          }}>
          <Image
            style={{ width: 18, height: 18 }}
            source={uri}
            tintColor={color.white}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: stylesForMultipleDevice.fontSize,
              color: color.carbonGrey,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: stylesForMultipleDevice.fontSize - 1.5,
              color: color.carbonGrey,
              marginTop: 3,
            }}>
            {content}
          </Text>
        </View>
      </View>
    );
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: marginBottom,
      }}>
      <View
        style={{
          backgroundColor: color.topaz,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 40,
          width: 40,
          height: 40,
          marginLeft: 15,
        }}>
        <Image
          style={{ width: 18, height: 18 }}
          source={uri}
          tintColor={color.white}
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize,
            color: color.carbonGrey,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize - 1.5,
            color: color.carbonGrey,
            marginTop: 3,
          }}>
          {content}
        </Text>
      </View>
    </View>
  );
};

export default InformationsOfService;
