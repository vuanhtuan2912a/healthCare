import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from '../../screens/noAuth/SignIn';
import SplashScreen from '../../screens/noAuth/SplashScreen';
import SignUp from '../../screens/noAuth/SignUp';
import HomeScreenNoAuth from '../../screens/noAuth/HomeScreenNoAuth';

const Stack = createStackNavigator();

const NoAuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreenNoAuth" component={HomeScreenNoAuth} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      {() => HomeStack()}
    </Stack.Navigator>
  );
};

export default NoAuthStack;
