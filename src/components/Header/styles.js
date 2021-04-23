import {StyleSheet} from 'react-native';
import {getSize} from '../../../utils/responsive';

export default StyleSheet.create({
  iconback: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  logoims: {
    width: getSize.s(70),
    height: getSize.s(70),
    resizeMode: 'contain',
  },
  iconregistration: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  iconlogout: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  iconsearch: {
    height: getSize.s(25),
    width: getSize.s(25),
    resizeMode: 'contain',
  },
});
