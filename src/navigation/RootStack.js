import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
