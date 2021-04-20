import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {theme} from '../../theme';
import {getSize} from '../../utils/responsive';
import {icon} from '../assets';
import {bottom} from '../screens/Bottom';
import {routes} from './routes';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME_SCREEN}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: theme.colors.orange,
        inactiveTintColor: theme.colors.lightGray,
        labelStyle: {marginBottom: getSize.m(2)},
      }}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom.HOME_SCREEN}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused, color}) => {
            return (
              <Image
                source={icon.home}
                style={{...styles.icoBottom, tintColor: color}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={bottom.NOTIFICATION_SCREEN}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({focused, color}) => {
            return (
              <Image
                source={icon.notification}
                style={{...styles.icoBottom, tintColor: color}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={bottom.PROFILE_SCREEN}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({focused, color}) => {
            return (
              <Image
                source={icon.profile}
                style={{...styles.icoBottom, tintColor: color}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
const styles = StyleSheet.create({
  icoBottom: {
    height: getSize.s(20),
    width: getSize.s(20),
  },
});
