import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {bottom} from '../screens/Bottom';
import {auth} from '../screens/Auth';
import BottomTab from './BottomTabNavigation';
import {navigationRef} from './RootNavigation';
import {routes} from './routes';
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        initialRouteName={routes.BOTTOM_TAB}
        mode="modal"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen
          name={routes.NEWS_DETAILS}
          component={bottom.NEWS_DETAILS}
        />
        <Stack.Screen
          name={routes.PROMOTION_DETAILS}
          component={bottom.PROMOTION_DETAILS}
        />
        <Stack.Screen
          name={routes.DETAILS_NOTIFICATION}
          component={bottom.DETAILS_NOTIFICATION}
        />
        <Stack.Screen
          name={routes.LOGIN_SCREEN}
          component={auth.LOGIN_SCREEN}
        />
        <Stack.Screen
          name={routes.SIGNUP_SCREEN}
          component={auth.SIGNUP_SCREEN}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
