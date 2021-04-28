import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../utils/responsive';

export default StyleSheet.create({
  iconclose: {
    width: getSize.s(14),
    height: getSize.s(14),
    alignSelf: 'flex-end',
    resizeMode: 'contain',
  },
});
