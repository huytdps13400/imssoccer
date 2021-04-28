import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../../theme';
import {getSize} from '../../../../utils/responsive';
import FormSignUp from './components/FormSignUp';

const SignUpScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={theme.colors.gradient}
      style={{flex: 1, paddingTop: getSize.m(top)}}>
      <FormSignUp />
    </LinearGradient>
  );
};

export default SignUpScreen;
