import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../theme';
import {icon} from '../../assets';
import Block from '../Block';
import Text from '../Text';
import styles from './styles';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};
const HeaderHome = () => {
  return (
    <Block>
      <Text></Text>
    </Block>
  );
};

const HeaderCommon = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={theme.colors.gradient}>
      <Block paddingTop={top + 10} paddingHorizontal={12} paddingVertical={16}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={icon.back} style={styles.iconback} />
        </Pressable>
      </Block>
    </LinearGradient>
  );
};

export default Header;
