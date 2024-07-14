import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { stylesForMultipleDevice } from '../../styles/global';
import { textGlobal } from '../../textGlobal';
import { color } from '../../styles/color';

const TypesAppointment = ({
  typesAppointment = textGlobal.CASH_FEE,
  onPressCashFee = () => {},
  onPressBHYT = () => {},
}) => {
  return (
    <View
      style={{
        width: '100%',
        height: stylesForMultipleDevice.heightButton,
        paddingHorizontal: 15,
        marginTop: 15,
      }}>
      <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
        <Pressable
          style={{
            width: '50%',
            height: stylesForMultipleDevice.heightButton,
            backgroundColor:
              typesAppointment === textGlobal.CASH_FEE
                ? color.topaz
                : color.white,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            borderWidth: 1,
            borderColor: color.topaz,
          }}
          onPress={onPressCashFee}>
          <Text
            style={{
              color:
                typesAppointment === textGlobal.CASH_FEE
                  ? color.white
                  : color.topaz,
              fontSize: stylesForMultipleDevice.fontSize,
              fontWeight: 'bold',
            }}>
            {textGlobal.CASH_FEE}
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: '50%',
            height: stylesForMultipleDevice.heightButton,
            backgroundColor:
              typesAppointment === textGlobal.BHYT ? color.topaz : color.white,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            borderWidth: 1,
            borderColor: color.topaz,
          }}
          onPress={onPressBHYT}>
          <Text
            style={{
              color:
                typesAppointment === textGlobal.BHYT
                  ? color.white
                  : color.topaz,
              fontSize: stylesForMultipleDevice.fontSize,
              fontWeight: 'bold',
            }}>
            {textGlobal.BHYT}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TypesAppointment;
