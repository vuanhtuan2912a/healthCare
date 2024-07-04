import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { styles } from '../../../styles/global';

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('HomeScreenNoAuth');
  }, 2000);

  return (
    <View style={styles.containerCenter}>
      <Image
        style={styles.imgLogo}
        source={require('../../../assets/images/logo.png')}
      />
      <ActivityIndicator />
    </View>
  );
};

export default SplashScreen;
