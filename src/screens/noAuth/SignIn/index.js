import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import ButtonCustom from '../../../components/ButtonCustom';
import LineWithContent from '../../../components/LineWithContent';
import TextInputCustom from '../../../components/TextInput';
import { color } from '../../../styles/color';
import { styles, stylesForMultipleDevice } from '../../../styles/global';
import { textGlobal } from '../../../textGlobal';
import TextButton from '../../../components/TextButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../store/actions/authentication/signIn';

const SignIn = () => {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [valuesPassword, setValuePassword] = React.useState('');
  const [valuesPhone, setValuePhone] = React.useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={color.peacockBlue}
        barStyle={'light-content'}
      />
      <Image
        style={styles.imgHeader}
        source={require('../../../assets/images/headerImg.png')}
      />
      <Image
        style={styles.imgLogo}
        source={require('../../../assets/images/logo.png')}
      />

      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
          marginTop: stylesForMultipleDevice.marginTop,
        }}>
        {textGlobal.PLEASE_INPUT_PHONE_PASSWORD}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.INPUT_PHONE}
          iconLeft={require('../../../assets/icons/phone.png')}
          marginTop={0}
          resizeMode="contain"
          value={valuesPhone}
          keyboardType="phone-pad"
          onChangeText={text => setValuePhone(text)}
        />
        <TextInputCustom
          content={textGlobal.INPUT_PASSWORD}
          iconLeft={require('../../../assets/icons/key.png')}
          iconRight={require('../../../assets/icons/eye.png')}
          marginTop={stylesForMultipleDevice.marginTop}
          iconSize={15}
          onPressRightIcon={() => setSecureTextEntry(!secureTextEntry)}
          resizeMode="contain"
          value={valuesPassword}
          secureTextEntry={secureTextEntry}
          onChangeText={text => setValuePassword(text)}
        />
      </View>
      <ButtonCustom
        content={textGlobal.SIGN_IN}
        backgroundColor={color.topaz}
        alignItems="center"
        onPress={() => dispatch(signIn(true))}
        marginTop={stylesForMultipleDevice.marginTop}
      />
      <LineWithContent
        content={textGlobal.OR}
        padding={15}
        marginTop={stylesForMultipleDevice.marginTop}
      />
      <ButtonCustom
        content={textGlobal.BACK_TO_HOME}
        backgroundColor={color.white}
        alignItems="center"
        onPress={() => navigation.navigate('HomeScreenNoAuth')}
        borderWidth={1}
        borderColor={color.topaz}
        textColor={color.topaz}
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
          contentNoHightLight={textGlobal.DONT_HAVE_ACCOUNT}
          content={' ' + textGlobal.SIGN_UP_NOW}
          onPress={() => navigation.navigate('SignUp')}
          textColor={color.topaz}
          marginTop={stylesForMultipleDevice.marginTop}
        />
      </View>
    </View>
  );
};

export default SignIn;
