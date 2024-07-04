import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { color } from '../../styles/color';
import { styles, stylesForMultipleDevice } from '../../styles/global';
import { textGlobal } from '../../textGlobal';
import { stylesHeaderBooking } from '../../styles/HeaderBooking';

const Header = ({
  uri = require('../../assets/icons/close.png'),
  iconCloseSize = 15,
  paddingTop = Platform.OS === 'ios' ? 57 : 10,
  content = '',
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        stylesHeaderBooking.container,
        { paddingTop: paddingTop, paddingBottom: 5 },
      ]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.peacockBlue}
      />
      <Pressable style={{ padding: 15 }} onPress={() => navigation.goBack()}>
        <Image
          style={{
            width: iconCloseSize,
            height: iconCloseSize,
          }}
          source={uri}
          tintColor={color.white}
          resizeMode="contain"
        />
      </Pressable>
      <Text
        style={{
          color: color.white,
          fontSize: stylesForMultipleDevice.fontSize + 3,
          fontWeight: 'bold',
        }}>
        {content}
      </Text>
      <View style={{ width: 30, height: 10 }} />
    </View>
  );
};

export default Header;
