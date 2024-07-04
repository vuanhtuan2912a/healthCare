import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppointmentBooking from '../../../screens/auth/AppointmentBooking';
import AppointmentBookingInformation from '../../../screens/auth/AppointmentBooking/AppointmentBookingInformation';
import ResultOfAppointmentBooking from '../../../screens/auth/AppointmentBooking/ResultOfAppointmentBooking';

const Stack = createStackNavigator();

const AppointmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AppointmentBooking">
      <Stack.Screen
        options={{}}
        name="AppointmentBooking"
        component={AppointmentBooking}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AppointmentBookingInformation"
        component={AppointmentBookingInformation}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResultOfAppointmentBooking"
        component={ResultOfAppointmentBooking}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
