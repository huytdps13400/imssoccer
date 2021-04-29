import React from 'react';
import {Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../../theme';
import {getSize} from '../../../../utils/responsive';
import FormSignUp from './components/FormSignUp';

const SignUpScreen = () => {
  const {top} = useSafeAreaInsets();
  const COLOR =
    Platform.OS === 'ios' ? theme.colors.gradient_ios : theme.colors.gradient;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={COLOR}
      style={{flex: 1, paddingTop: getSize.m(top)}}>
      <FormSignUp />
    </LinearGradient>
  );
};

export default SignUpScreen;
