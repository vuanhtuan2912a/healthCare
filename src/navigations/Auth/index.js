import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeStack from './HomeStack';
import WebViewCustom from '../../screens/auth/WebView';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="WebViewCustom" component={WebViewCustom} />
    </Stack.Navigator>
  );
};

export default AuthStack;
