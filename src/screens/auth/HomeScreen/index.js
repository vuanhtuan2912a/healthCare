import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonBooking from '../../../components/ButtonBooking';
import HeaderHomeScreen from '../../../components/HeaderHomeScreen';
import News from '../../../components/News';
import PackageService from '../../../components/PackageService';
import ShapBackground from '../../../components/ShapeBackground';
import { color } from '../../../styles/color';
import { styles } from '../../../styles/global';

const HomeScreen = () => {
  const navigation = useNavigation();
  const userInformations = useSelector(state => state.signInReducer);
  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor={color.peacockBlue}
        barStyle={'light-content'}
      />

      <HeaderHomeScreen
        id={userInformations?.data?.CCCD}
        fullName={userInformations?.data?.name}
      />

      <ButtonBooking
        onPress={() => navigation.navigate('AppointmentBooking')}
      />
      <ShapBackground />

      <ScrollView
        style={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <PackageService />
        <News />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
