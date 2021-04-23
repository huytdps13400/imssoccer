/* eslint-disable react-native/no-inline-styles */
import {icon} from '../../assets';
import Block from '../Block';
import Text from '../Text';
import {theme} from '../../../theme';
import React from 'react';
import {Image, TextInput} from 'react-native';
import styles from './styles';

const InputText = ({
  setRef,
  iconLeft,
  placeholder,
  keyboardType,
  onChangeText,
  onChange,
  value,
  style,
  containerStyle,
  inputStyle,
  isSecure,
  isError,
  errorText,
  errorContainerStyle,
  customRight,
  errorTextStyles,
  onFocus,
}) => {
  const _renderError = () => (
    <Block
      row
      alignCenter
      paddingVertical={5}
      paddingHorizontal={15}
      style={errorContainerStyle}>
      <Image
        source={icon.search}
        resizeMode="contain"
        style={styles.icoWarning}
      />
      <Text
        style={errorTextStyles}
        marginLeft={5}
        size={11}
        color={theme.colors.red}>
        {errorText}
      </Text>
    </Block>
  );

  return (
    <Block style={containerStyle}>
      <Block
        row
        flex
        alignCenter
        paddingHorizontal={12}
        radius={45}
        backgroundColor="white"
        borderWidth={0.5}
        borderColor={isError ? theme.colors.red : theme.colors.white}
        style={style}>
        {iconLeft && (
          <Image
            source={iconLeft}
            resizeMode={'contain'}
            style={{
              ...styles.iconLeft,
              tintColor: isError ? theme.colors.red : theme.colors.grays,
            }}
          />
        )}
        <TextInput
          ref={setRef}
          style={{flex: 1, ...inputStyle}}
          secureTextEntry={isSecure}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={theme.colors.placeholder}
          value={value}
          onChangeText={text => onChangeText(text)}
          onFocus={onFocus}
          onChange={onChange}
        />
        {customRight && customRight()}
      </Block>
      {isError && Boolean(errorText) && _renderError()}
    </Block>
  );
};

export default InputText;
