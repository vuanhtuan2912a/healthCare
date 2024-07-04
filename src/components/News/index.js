import React from 'react';
import { Text, View, Image } from 'react-native';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';
import { textGlobal } from '../../textGlobal';
import TextButton from '../TextButton';
import NewsItems from './news';

const News = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize + 8,
            fontWeight: '700',
            color: color.carbonGrey,
          }}>
          {textGlobal.NEWS_SPECIAL}
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
      <View style={{ width: '100%', height: 200 }}>
        <NewsItems />
      </View>
    </View>
  );
};

export default News;
