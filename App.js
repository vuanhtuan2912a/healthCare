import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NoAuthStack from './src/navigations/noAuth';
import AuthStack from './src/navigations/Auth';
import { Provider, useSelector } from 'react-redux';
import store from './src/store/index';

const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const isCheckLogin = useSelector(state => state.signInReducer);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isCheckLogin?.isLogin ? (
            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="noAuth"
              component={NoAuthStack}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppWrapper;
