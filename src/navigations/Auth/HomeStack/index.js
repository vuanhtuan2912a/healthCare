import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ButtonIconMiddle from '../../../components/ButtonIconMiddle';
import IconWithText from '../../../components/IconWithText';
import BookingScreen from '../../../screens/auth/BookingScreen';
import CommunityScreen from '../../../screens/auth/CommunityScreen';
import HomeScreen from '../../../screens/auth/HomeScreen';
import { color } from '../../../styles/color';
import { textBottomMenu } from '../../../textGlobal/bottomMenu';
import AppointmentStack from '../AppointmentStack';
import AppointmentCalendar from '../../../screens/auth/AppointmentCalendar';
import ProfileScreen from '../../../screens/auth/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    icon: require('../../../assets/icons/home_bottom_bar.png'),
    content: textBottomMenu.HOME,
    isMiddle: false,
  },
  {
    name: 'AppointmentCalendar',
    component: AppointmentCalendar,
    icon: require('../../../assets/icons/calendar.png'),
    content: textBottomMenu.APPOINTMENT_CALENDAR,
    isMiddle: false,
  },
  {
    name: 'AppointmentStack',
    component: AppointmentStack,
    icon: require('../../../assets/icons/add-calendar.png'),
    content: textBottomMenu.BOOKING,
    isMiddle: true,
  },
  {
    name: 'BookingScreen',
    component: CommunityScreen,
    icon: require('../../../assets/icons/community_bottom_bar.png'),
    content: textBottomMenu.COMMUNITY,
    isMiddle: false,
  },
  {
    name: 'ProfileScreen',
    component: ProfileScreen,
    icon: require('../../../assets/icons/person.png'),
    content: textBottomMenu.PROFILE,
    isMiddle: false,
  },
];

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {
              ...tab.tabBarStyle,
              padding: 10,
              backgroundColor: color.white,
              shadowColor: color.black,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              borderWidth: 0,
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 3,
            },
            tabBarIcon: ({ focused, size }) =>
              tab?.isMiddle ? (
                <ButtonIconMiddle
                  uri={tab.icon}
                  content={tab.content}
                  textColor={focused ? color.topaz : color.carbonGrey}
                />
              ) : (
                <IconWithText
                  uri={tab.icon}
                  content={tab.content}
                  textColor={focused ? color.topaz : color.carbonGrey}
                  iconColor={focused ? color.topaz : color.carbonGrey}
                />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeStack;
