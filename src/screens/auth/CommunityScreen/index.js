import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../../../styles/color';
import { stylesForMultipleDevice } from '../../../styles/global';

const CommunityScreen = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: color.white,
      }}>
      <View
        style={{
          width: '90%',
          height: 300,
          backgroundColor: color.topaz,
          borderRadius: 6,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize + 3,
            textAlign: 'center',
            maxWidth: '80%',
            alignSelf: 'center',
            color: color.white,
            fontWeight: '600',
          }}>
          {`Tính năng này đang phát triển. Vui lòng chọn tính năng khác để có trải nghiệm tốt nhất!`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({});
