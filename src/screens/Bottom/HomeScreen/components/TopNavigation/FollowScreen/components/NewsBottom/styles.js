import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../../../../utils/responsive';

export default StyleSheet.create({
  imgbanner: {
    width: '100%',
    height: getSize.s(250),
  },
  txtimg: {position: 'absolute', bottom: getSize.m(30), alignSelf: 'center'},
  imgbannerpicter1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
