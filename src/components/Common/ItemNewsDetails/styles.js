import {StyleSheet} from 'react-native';
import {getSize} from '../../../../utils/responsive';

export default StyleSheet.create({
  bannernewsdetails: {
    height: getSize.s(170),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 7,
  },
  bannernewsdetailsvertical: {
    width: '100%',
    height: getSize.s(90),
    resizeMode: 'cover',
    borderRadius: 5,
  },
});
