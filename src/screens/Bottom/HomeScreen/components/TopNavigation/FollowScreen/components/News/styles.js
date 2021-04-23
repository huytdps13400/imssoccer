import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../../../../../utils/responsive';

export default StyleSheet.create({
  bannernews: {
    width: width - 24,
    height: getSize.s(200),
    resizeMode: 'contain',
  },
});
