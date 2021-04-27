import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../../utils/responsive';

export default StyleSheet.create({
  imgstylebannerpromotion: {
    width: '100%',
    height: getSize.s(188),
    borderRadius: getSize.s(10),
    resizeMode: 'cover',
    marginTop: getSize.m(5),
  },
  linearGradient: {
    width: width,
    position: 'absolute',
    bottom: 0,
    paddingTop: getSize.m(25),
  },
  icondetail: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
});
