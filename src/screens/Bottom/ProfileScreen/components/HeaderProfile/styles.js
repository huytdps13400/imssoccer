import {StyleSheet} from 'react-native';
import {getSize, height} from '../../../../../../utils/responsive';

export default StyleSheet.create({
  imgAvatar: {
    width: getSize.s(56),
    height: getSize.s(56),
  },
  imgCamera: {
    marginVertical: 17,
    width: getSize.s(21),
    position: 'absolute',
    top: 0,
    right: -10,
    opacity: 0.9
  },
});
