import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Block from '../Block';
import Text from '../Text';
import {theme} from '../../../theme';
const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};
const HeaderHome = () => {
  return (
    <Block>
      <Text></Text>
    </Block>
  );
};

const HeaderCommon = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={theme.colors.gradient}>
      <Block paddingTop={10}>
        <Text></Text>
      </Block>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({});
