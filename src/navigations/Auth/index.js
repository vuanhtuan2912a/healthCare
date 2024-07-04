import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
