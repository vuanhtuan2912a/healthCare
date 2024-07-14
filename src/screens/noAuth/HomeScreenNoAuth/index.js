import React from 'react';
import { Alert, Pressable, ScrollView, View } from 'react-native';
import ButtonBooking from '../../../components/ButtonBooking';
import HeaderWithAvatar from '../../../components/HeaderWithAvatar';
import News from '../../../components/News';
import PackageService from '../../../components/PackageService';
import ShapBackground from '../../../components/ShapeBackground';
import { styles } from '../../../styles/global';
import BottomTabCustom from '../../../components/BottomTabButton';
import { color } from '../../../styles/color';
import { useNavigation } from '@react-navigation/native';

const HomeScreenNoAuth = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        Alert.alert('', 'Vui lòng đăng nhập để chọn chức năng này.', [
          {
            text: 'Đăng nhập',
            onPress: () => navigation.navigate('SignIn'),
            style: 'OK',
          },
        ])
      }>
      <HeaderWithAvatar />
      <ButtonBooking
        onPress={() =>
          Alert.alert('', 'Vui lòng đăng nhập để chọn chức năng này.', [
            {
              text: 'Đăng nhập',
              onPress: () => navigation.navigate('SignIn'),
              style: 'OK',
            },
          ])
        }
      />
      <ShapBackground />
      <ScrollView
        style={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <PackageService isAuth={true} />
        <News />
      </ScrollView>
      <View
        style={{
          backgroundColor: color.white,
          shadowColor: color.carbonGrey,
          shadowOffset: { width: 2, height: 2 },
          shadowRadius: 3,
          elevation: 3,
          paddingHorizontal: 15,
          shadowOpacity: 0.7,
        }}>
        <BottomTabCustom />
      </View>
    </Pressable>
  );
};

export default HomeScreenNoAuth;
