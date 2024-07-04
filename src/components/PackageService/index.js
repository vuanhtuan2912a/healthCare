import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { textGlobal } from '../../textGlobal';
import { stylesForMultipleDevice } from '../../styles/global';
import { color } from '../../styles/color';
import TextButton from '../TextButton';
import Package from './Package';

const PackageService = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 20,
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize + 8,
            fontWeight: '700',
            color: color.carbonGrey,
          }}>
          {textGlobal.PACKING_SERVICE}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextButton
            content={textGlobal.SEE_MORE}
            textColor={color.topaz}
            marginTop={0}
            fontWeight="normal"
            textSize={stylesForMultipleDevice.fontSize}
            paddingHorizonta={0}
          />
          <Image
            style={{ width: 10, height: 10 }}
            source={require('../../assets/icons/arrow-right.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <Package />
    </View>
  );
};

export default PackageService;

const styles = StyleSheet.create({});
