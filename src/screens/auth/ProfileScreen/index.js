import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header';
import { color } from '../../../styles/color';
import { stylesForMultipleDevice } from '../../../styles/global';
import TextInputCustom from '../../../components/TextInput';
import { textGlobal } from '../../../textGlobal';

const ProfileScreen = () => {
  const userInformations = useSelector(state => state.signInReducer);
  const user_data = [
    {
      content: userInformations?.data?.name,
      iconLeft: require('../../../assets/icons/person.png'),
    },
    {
      content: userInformations?.data?.phone,
      iconLeft: require('../../../assets/icons/phone.png'),
    },
    {
      content: userInformations?.data?.CCCD,
      iconLeft: require('../../../assets/icons/information.png'),
    },
    {
      content: userInformations?.data?.address,
      iconLeft: require('../../../assets/icons/location.png'),
    },
    {
      content: userInformations?.data?.dob,
      iconLeft: require('../../../assets/icons/calendar.png'),
    },
  ];
  return (
    <View
      style={{ width: '100%', height: '100%', backgroundColor: color.white }}>
      <Header content="Hồ sơ bệnh nhân" />
      <Text
        style={{
          fontSize: stylesForMultipleDevice.fontSize + 10,
          alignSelf: 'center',
          marginTop: 30,
          color: color.topaz,
          fontWeight: 'bold',
        }}>
        {userInformations?.data?.name}
      </Text>
      <Text
        style={{
          fontSize: stylesForMultipleDevice.fontSize - 1,
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 20,
          color: color.carbonGrey,
        }}>
        {userInformations?.data?.phone}
      </Text>

      {user_data &&
        user_data?.map((item, index) => (
          <View
            key={index}
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TextInputCustom
              iconLeft={item?.iconLeft}
              iconLeftSize={20}
              textInputDisable={true}
              marginTop={0}
              resizeMode="contain"
              value={item?.content}
              textColor={color.lightGrey}
              editable={false}
              disabled={true}
              tintColorIconLeft={color.lightGrey}
            />
          </View>
        ))}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
