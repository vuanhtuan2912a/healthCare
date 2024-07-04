import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import ButtonCustom from '../../../../components/ButtonCustom';
import TextInputCustom from '../../../../components/TextInput';
import { color } from '../../../../styles/color';
import { styles, stylesForMultipleDevice } from '../../../../styles/global';
import { textGlobal } from '../../../../textGlobal';
import TextButton from '../../../../components/TextButton';
import { useNavigation } from '@react-navigation/native';

const SignUpWithCMND = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
          marginTop: stylesForMultipleDevice.marginTop,
        }}>
        {textGlobal.PLEASE_INPUT_PHONE}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.INPUT_PHONE}
          iconLeft={require('../../../../assets/icons/phone.png')}
          marginTop={0}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
          marginTop: stylesForMultipleDevice.marginTop,
        }}>
        {textGlobal.PLEASE_INPUT_CMND}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.PLEASE_INPUT_CMND}
          iconLeft={require('../../../../assets/icons/information.png')}
          marginTop={stylesForMultipleDevice.marginTop}
          iconSize={15}
          onPress={() => console.log('show password')}
          resizeMode="contain"
        />
      </View>

      <ButtonCustom
        content={textGlobal.SIGN_UP}
        backgroundColor={color.topaz}
        alignItems="center"
        onPress={() => console.log('Đăng nhập')}
        marginTop={stylesForMultipleDevice.marginTop}
      />
      <View
        style={{
          alignSelf: 'flex-end',
          width: '100%',
          justifyContent: 'flex-end',
          height: 50,
        }}>
        <TextButton
          contentNoHightLight={textGlobal.ALDREADY_HAVE_ACCOUNT}
          content={' ' + textGlobal.SIGN_IN_NOW}
          onPress={() => navigation.navigate('SignUp')}
          textColor={color.topaz}
          marginTop={stylesForMultipleDevice.marginTop}
        />
      </View>
    </View>
  );
};

export default SignUpWithCMND;
