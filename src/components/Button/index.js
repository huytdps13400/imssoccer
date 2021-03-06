/* eslint-disable react-native/no-inline-styles */
import Text from '../Text';
import {theme} from '../../../theme';
import React from 'react';
import {Pressable, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Button = ({title, onPress, style, titleStyle, disabled}) => {
  const COLOR =
    Platform.OS === 'ios' ? theme.colors.gradient_ios : theme.colors.gradient;
  return (
    <Pressable
      onPress={() => {
        !disabled && onPress();
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={COLOR}
        style={{...styles.container, opacity: disabled ? 0.5 : 1, ...style}}>
        <Text fontType="semibold" color={theme.colors.white} style={titleStyle}>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
