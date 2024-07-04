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
  const [enableEdit, setEnableEdit] = React.useState(false);
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

      <TouchableOpacity
        onPress={() => setEnableEdit(!enableEdit)}
        style={{
          borderRadius: 6,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 1,
          paddingHorizontal: 20,
          flexDirection: 'row',
          backgroundColor: color.white,
          shadowColor: color.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 2,
        }}>
        <Text
          style={{
            fontSize: stylesForMultipleDevice.fontSize - 1,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: color.carbonGrey,
          }}>
          Chỉnh sửa hồ sơ
        </Text>
        <Image
          style={{
            width: 13,
            height: 13,
            marginLeft: 10,
            alignSelf: 'center',
            tintColor: color.lightGrey,
          }}
          source={require('../../../assets/icons/arrow-right.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>

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
              textColor={enableEdit ? color.black : color.lightGrey}
              editable={enableEdit}
              disabled={true}
              tintColorIconLeft={enableEdit ? color.black : color.lightGrey}
            />
          </View>
        ))}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
