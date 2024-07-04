import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, StatusBar, View } from 'react-native';
import SelectButton from '../../../components/SelectButton';
import { color } from '../../../styles/color';
import { styles } from '../../../styles/global';
import { textGlobal } from '../../../textGlobal';
import SignUpWithCCCD from './SignUpWithCCCD';
import SignUpWithCMND from './SignUpWithCMND';

const SignUp = () => {
  const navigation = useNavigation();
  const [selectButton, setSelectButton] = useState(textGlobal.CCCD);
  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <View style={{ ...styles.container, alignItems: 'center', padding: 15 }}>
        <StatusBar
          backgroundColor={color.peacockBlue}
          barStyle={'light-content'}
        />
        <Image
          style={{ ...styles.imgLogo, marginTop: 20, marginBottom: 20 }}
          source={require('../../../assets/images/logo.png')}
        />
        <View style={{ flexDirection: 'row' }}>
          <SelectButton
            borderBottomRightRadius={0}
            borderTopRightRadius={0}
            textColor={
              selectButton === textGlobal.CCCD ? color.white : color.topaz
            }
            backgroundColor={
              selectButton === textGlobal.CCCD ? color.topaz : color.white
            }
            content={textGlobal.CCCD}
            onPress={() => {
              setSelectButton(textGlobal.CCCD);
            }}
          />
          <SelectButton
            borderBottomLeftRadius={0}
            borderTopLeftRadius={0}
            textColor={
              selectButton === textGlobal.CMND ? color.white : color.topaz
            }
            backgroundColor={
              selectButton === textGlobal.CMND ? color.topaz : color.white
            }
            content={textGlobal.CMND}
            onPress={() => {
              setSelectButton(textGlobal.CMND);
            }}
          />
        </View>
        {selectButton === textGlobal.CCCD && <SignUpWithCCCD />}
        {selectButton === textGlobal.CMND && <SignUpWithCMND />}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
