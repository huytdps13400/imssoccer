import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {theme} from '../../theme';
import {getSize} from '../../utils/responsive';
import {top} from '../screens/Bottom/HomeScreen/components/TopNavigation';

const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="FirstPage"
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#000',
        scrollEnabled: true,
        tabStyle: {width: 'auto'},
        style: {
          backgroundColor: theme.colors.gradient,
          height: getSize.m(50),
        },

        labelStyle: {
          textAlign: 'center',
          textTransform: 'none',
        },
        indicatorStyle: {
          borderBottomColor: theme.colors.white,
          borderBottomWidth: 5,
        },
      }}>
      <Tab.Screen
        name="FirstPage"
        component={top.FLLOW_SCREEN}
        options={{
          tabBarLabel: 'Theo dõi',
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={top.FLLOW_SCREEN}
        options={{
          tabBarLabel: 'Đề xuất',
        }}
      />
      <Tab.Screen
        name="FirstsPage"
        component={top.FLLOW_SCREEN}
        options={{
          tabBarLabel: 'Xã hội',
        }}
      />
      <Tab.Screen
        name="SecondsPage"
        component={top.FLLOW_SCREEN}
        options={{
          tabBarLabel: 'Thế giới',
        }}
      />
      <Tab.Screen
        name="SecondssPage"
        component={top.FLLOW_SCREEN}
        options={{
          tabBarLabel: 'Bóng đá việt',
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer independent={true}>
      <TabStack />
    </NavigationContainer>
  );
}
export default App;
