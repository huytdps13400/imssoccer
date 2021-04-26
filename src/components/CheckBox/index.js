/* eslint-disable react-native/no-inline-styles */
import {icon} from '../../assets';
import Block from '../../components/Block';
import Text from '../../components/Text';
import React, {useRef} from 'react';
import {Animated, Image, Pressable} from 'react-native';
import styles from './styles';

const PressableAnim = Animated.createAnimatedComponent(Pressable);

const CheckBox = ({
  title,
  value,
  setValue,
  containerStyles,
  iconStyles,
  textStyles,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const _onChange = () => {
    setValue(prev => !prev);
    Animated.spring(opacity, {
      toValue: value ? 0 : 1,
      useNativeDriver: true,
      bounciness: 1,
    }).start();
  };

  return (
    <Block style={containerStyles} row alignCenter>
      <Block marginRight={10}>
        <Pressable onPress={_onChange}>
          <Image
            style={{...styles.iconCheck, ...iconStyles, opacity: value ? 0 : 1}}
            source={icon.square}
          />
        </Pressable>

        <PressableAnim
          style={{...styles.btnActivity, opacity}}
          onPress={_onChange}>
          <Image
            style={{...styles.iconChecked, ...iconStyles}}
            source={icon.check_blank}
          />
        </PressableAnim>
      </Block>

      <Text style={textStyles} fontType="bold" size={15}>
        {title}
      </Text>
    </Block>
  );
};

export default CheckBox;
