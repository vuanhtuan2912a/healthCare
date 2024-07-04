import React from 'react';
import { Alert, Pressable, View } from 'react-native';
import IconWithText from '../IconWithText';
import ButtonIconMiddle from '../ButtonIconMiddle';
import { color } from '../../styles/color';
import { useNavigation } from '@react-navigation/native';

const BottomTabCustom = () => {
  const navigation = useNavigation();
  const data = [
    {
      uri: require('../../assets/icons/home_bottom_bar.png'),
      content: 'Trang chủ',
      middle: false,
      isActive: true,
    },
    {
      uri: require('../../assets/icons/calendar.png'),
      content: 'Lịch khám',
      middle: false,
      isActive: false,
    },
    {
      uri: require('../../assets/icons/add-calendar.png'),
      content: 'Đặt lịch',
      middle: true,
      isActive: false,
    },
    {
      uri: require('../../assets/icons/community_bottom_bar.png'),
      content: 'Cộng đồng',
      middle: false,
      isActive: false,
    },
    {
      uri: require('../../assets/icons/person.png'),
      content: 'Tài khoản',
      middle: false,
      isActive: false,
    },
  ];

  return (
    <Pressable
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
      onPress={() =>
        Alert.alert('', 'Vui lòng đăng nhập để chọn chức năng này.', [
          {
            text: 'Đăng nhập',
            onPress: () => navigation.navigate('SignIn'),
            style: 'OK',
          },
        ])
      }>
      {data?.map((item, index) =>
        item?.middle ? (
          <ButtonIconMiddle
            key={index}
            uri={item.uri}
            content={item.content}
            textColor={color.carbonGrey}
          />
        ) : (
          <IconWithText
            key={index}
            uri={item.uri}
            content={item.content}
            iconColor={item?.isActive ? color.topaz : color.carbonGrey}
            textColor={item?.isActive ? color.topaz : color.carbonGrey}
          />
        ),
      )}
    </Pressable>
  );
};

export default BottomTabCustom;
