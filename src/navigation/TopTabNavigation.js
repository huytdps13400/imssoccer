import * as React from 'react';
import {Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../theme';
function MyTabBar({state, descriptors, navigation}) {
  const COLOR =
    Platform.OS === 'ios' ? theme.colors.gradient_ios : theme.colors.gradient;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={COLOR}
      style={{
        paddingLeft: 12,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, alignItems: 'center', marginRight: 30}}>
              <Text
                style={{
                  color: isFocused ? '#000' : '#fff',
                  fontWeight: isFocused
                    ? theme.fonts.fontWeight.bold
                    : theme.fonts.fontWeight.regular,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
}

export default MyTabBar;
