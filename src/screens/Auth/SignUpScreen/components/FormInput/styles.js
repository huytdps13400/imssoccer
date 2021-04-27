import {StyleSheet} from 'react-native';
import {theme} from '../../../../../../theme';
import {getSize} from '../../../../../../utils/responsive';

export default StyleSheet.create({
  containerStyle: {
    height: getSize.v(45),
    borderWidth: getSize.m(1),
    borderColor: theme.colors.placeholder,
    paddingHorizontal: getSize.m(10),
    marginTop: getSize.m(7),
    borderRadius: getSize.m(5),
  },
});
