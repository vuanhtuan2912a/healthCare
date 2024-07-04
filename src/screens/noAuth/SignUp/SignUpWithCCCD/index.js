import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useDispatch } from 'react-redux';
import AlertCustom from '../../../../components/Alert';
import ButtonCustom from '../../../../components/ButtonCustom';
import SquareQrCode from '../../../../components/SquareQrCode';
import TextButton from '../../../../components/TextButton';
import TextInputCustom from '../../../../components/TextInput';
import { formatDateString } from '../../../../functions/date';
import { validatePhoneNumber } from '../../../../functions/regex/phone';
import { checkLogin } from '../../../../store/actions/authentication/signIn';
import { saveDataRegister } from '../../../../store/actions/authentication/signUp';
import { color } from '../../../../styles/color';
import { styles, stylesForMultipleDevice } from '../../../../styles/global';
import { textGlobal } from '../../../../textGlobal';

const SignUpWithCCCD = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission(null);
  const [isActiveScanQrCode, setIsActiveScanQrCode] = useState(false);
  const [lastestScannerData, setLastestScannerData] = useState(null);
  const [dataPhone, setDataPhone] = useState(null);
  const [contentAlert, setContentAlert] = useState(null);
  const [contentAlertCCCD, setContentAlertCCCD] = useState(null);

  React.useEffect(() => {
    requestPermission();
  });

  const onRegister = () => {
    if (dataPhone !== null || dataPhone !== 'NOTSHOW') {
      setContentAlert(validatePhoneNumber(dataPhone));
    }
    if (lastestScannerData === null) {
      setContentAlertCCCD(
        'Vui lòng quét mã QR trên CCCD để tự động điền thông tin',
      );
    }
    if (lastestScannerData !== null) {
      dispatch(
        saveDataRegister({ data: { phone: dataPhone, ...lastestScannerData } }),
      );
      AlertCustom({
        message: textGlobal.SIGN_UP_SUCCESSFULL,
        onPress: () => {
          dispatch(checkLogin(true));
        },
      });
    } else {
      AlertCustom({
        message: 'Vui lòng điền đầy đủ thông tin',
      });
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      const data = codes[0].value;
      const dataArray = data?.split('|');
      const dataObject = {
        CCCD: dataArray[0].trim(),
        name: dataArray[2].trim(),
        dob: formatDateString(dataArray[3].trim()),
        gender: dataArray[4].trim(),
        address: dataArray[5].trim(),
        dateOfCreate: formatDateString(dataArray[6].trim()),
      };
      if (dataObject !== undefined || dataObject !== null) {
        setLastestScannerData(dataObject);
        setIsActiveScanQrCode(false);
      }
    },
  });

  const QRCodeView = () => {
    if (device == null || device == undefined || !hasPermission) {
      return Alert.alert('', `${textGlobal.CAMERA_NOT_AVAILABLE}`, [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    }
    return (
      <Modal
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color.black,
        }}
        visible={isActiveScanQrCode}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Pressable
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 15,
              left: 15,
              zIndex: 100,
            }}
            onPress={() => setIsActiveScanQrCode(false)}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../../../assets/icons/back.png')}
              resizeMode="contain"
            />
          </Pressable>
          <Camera
            style={{ ...StyleSheet.absoluteFill }}
            codeScanner={codeScanner}
            device={device}
            isActive={isActiveScanQrCode ? true : false}
            photo={true}
          />
          <SquareQrCode />
        </View>
      </Modal>
    );
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ ...styles.container, marginTop: 15, marginBottom: 20 }}>
      <StatusBar
        backgroundColor={color.peacockBlue}
        barStyle={'light-content'}
      />
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
          value={dataPhone}
          onChangeText={text => setDataPhone(text)}
          keyboardType="phone-pad"
        />

        {!contentAlert || contentAlert === '' ? null : (
          <Text
            style={{
              color: color.red,
              fontSize: stylesForMultipleDevice.fontSize - 3,
              marginTop: 5,
            }}>
            {contentAlert}
          </Text>
        )}
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
        }}>
        {textGlobal.PLEASE_SCAN_QR_CODE_ON_CCCD}
      </Text>
      <View style={styles.paddingGlobal}>
        <Text
          style={{
            color: color.lightSteelBlue,
            marginTop: -10,
            marginBottom: 10,
            fontSize: stylesForMultipleDevice.fontSize - 3,
          }}>
          {textGlobal.CHOOSE_ICON_QR_CODE}
        </Text>
        <TextInputCustom
          content={textGlobal.PLEASE_SCAN_QR_CODE_ON_CCCD}
          iconLeft={require('../../../../assets/icons/information.png')}
          iconRight={require('../../../../assets/icons/qr-code.png')}
          iconRightSize={20}
          tintColorIconRight={color.topaz}
          textInputDisable={true}
          marginTop={0}
          resizeMode="contain"
          value={
            lastestScannerData !== null ? `${lastestScannerData?.CCCD}` : null
          }
          onPressRightIcon={() => {
            setIsActiveScanQrCode(true);
          }}
          editable={false}
          disabled={true}
        />
        {contentAlertCCCD && (
          <Text
            style={{
              color: color.red,
              fontSize: stylesForMultipleDevice.fontSize - 3,
              marginTop: 5,
            }}>
            {contentAlertCCCD}
          </Text>
        )}
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
        }}>
        {textGlobal.FULL_NAME}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.FULL_NAME}
          iconLeft={require('../../../../assets/icons/person.png')}
          iconRightSize={20}
          textInputDisable={true}
          marginTop={0}
          resizeMode="contain"
          value={
            lastestScannerData !== null ? `${lastestScannerData?.name}` : ''
          }
          backgroundColor={color.black}
          editable={false}
          disabled={true}
        />
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
        }}>
        {textGlobal.GENDER}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.GENDER}
          iconLeft={require('../../../../assets/icons/gender.png')}
          iconRightSize={25}
          textInputDisable={true}
          marginTop={0}
          resizeMode="contain"
          value={
            lastestScannerData !== null ? `${lastestScannerData?.gender}` : ''
          }
          editable={false}
          disabled={true}
        />
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
        }}>
        {textGlobal.DOB}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.DOB}
          iconLeft={require('../../../../assets/icons/calendar.png')}
          iconRightSize={20}
          textInputDisable={true}
          marginTop={0}
          resizeMode="contain"
          value={lastestScannerData !== null ? lastestScannerData?.dob : ''}
          editable={false}
          disabled={true}
        />
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
        }}>
        {textGlobal.ADDRESS}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.ADDRESS}
          iconLeft={require('../../../../assets/icons/location.png')}
          iconRightSize={25}
          textInputDisable={true}
          marginTop={0}
          resizeMode="contain"
          value={
            lastestScannerData !== null ? `${lastestScannerData?.address}` : ''
          }
          editable={false}
          disabled={true}
        />
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          color: color.black,
        }}>
        {textGlobal.DATE_OF_CREATE_CCCD}
      </Text>
      <View style={styles.paddingGlobal}>
        <TextInputCustom
          content={textGlobal.DATE_OF_CREATE_CCCD}
          iconLeft={require('../../../../assets/icons/calendar.png')}
          iconRightSize={20}
          textInputDisable={true}
          marginTop={0}
          resizeMode="contain"
          value={
            lastestScannerData !== null ? lastestScannerData?.dateOfCreate : ''
          }
          editable={false}
          disabled={true}
        />
      </View>
      <ButtonCustom
        content={textGlobal.SIGN_UP}
        backgroundColor={color.topaz}
        alignItems="center"
        onPress={onRegister}
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
          onPress={() => navigation.navigate('SignIn')}
          textColor={color.topaz}
          marginTop={stylesForMultipleDevice.marginTop}
        />
      </View>

      {isActiveScanQrCode && QRCodeView()}
    </ScrollView>
  );
};

export default SignUpWithCCCD;
