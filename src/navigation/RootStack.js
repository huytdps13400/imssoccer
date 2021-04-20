import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTabNavigation';
import {routes} from './routes';
import {navigationRef} from './RootNavigation';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
