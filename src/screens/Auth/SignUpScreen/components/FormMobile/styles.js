import {StyleSheet} from 'react-native';
import {theme} from '../../../../../../theme';
import {getSize, width} from '../../../../../../utils/responsive';

export default StyleSheet.create({
  iconcountry: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  iconselectmobile: {
    width: getSize.s(10),
    height: getSize.s(10),
    resizeMode: 'contain',
    marginLeft: getSize.m(7),
    marginRight: getSize.m(12),
  },
  styletxt: {
    color: theme.colors.placeholder,
    fontSize: 14,
    width: width - 110,
    fontWeight: '500',
  },
});
