import {theme} from '../../../theme';
import {getSize} from '../../../utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    height: getSize.v(45),
    width: '100%',
  },
  iconLeft: {
    height: getSize.s(15),
    width: getSize.s(15),
    marginRight: getSize.m(10),
  },
  icoWarning: {
    tintColor: theme.colors.red,
    height: getSize.s(11),
    width: getSize.s(11),
  },
});
