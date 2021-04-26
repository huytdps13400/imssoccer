import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../theme';
import {getSize, width, height} from '../../../utils/responsive';
import {icon} from '../../assets';
import TopTab from '../../navigation/TopTabNavigation';
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
  const {top} = useSafeAreaInsets();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={theme.colors.gradient}>
      <Block
        paddingTop={Platform.OS === 'ios' ? top + 10 : getSize.m(top - 10)}
        paddingHorizontal={12}>
        <Block row alignCenter space="between">
          <Image source={icon.logoims} style={styles.logoims} />
          <Block row alignCenter>
            <Block
              alignCenter
              justifyCenter
              width={getSize.s(35)}
              height={getSize.s(35)}
              radius={getSize.s(35)}
              backgroundColor="white">
              <Image
                source={icon.registration}
                style={styles.iconregistration}
              />
            </Block>
            <Text marginHorizontal={getSize.m(12)} fontType="semibold">
              Đăng Ký
            </Text>
            <Block
              alignCenter
              justifyCenter
              width={getSize.s(35)}
              height={getSize.s(35)}
              radius={getSize.s(35)}
              backgroundColor="white">
              <Image source={icon.logout} style={styles.iconlogout} />
            </Block>
            <Text marginLeft={getSize.m(12)} fontType="semibold">
              Đăng Nhập
            </Text>
          </Block>
        </Block>
        <Block alignCenter row space="between">
          <Block
            alignCenter
            row
            radius={getSize.s(25)}
            height={getSize.s(40)}
            width="90%"
            backgroundColor="white">
            <Text marginLeft={getSize.m(12)} color={theme.colors.placeholder}>
              Tìm kiếm...
            </Text>
          </Block>
          <Image source={icon.search} style={styles.iconsearch} />
        </Block>
      </Block>
      <Block width={width} height={height}>
        <TopTab />
      </Block>
    </LinearGradient>
  );
};

const HeaderCommon = ({title}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={theme.colors.gradient}>
      <Block
        row
        alignCenter
        paddingHorizontal={12}
        paddingTop={top + 10}
        paddingVertical={16}>
       
          <Pressable>
            <Image
              source={icon.back}
              resizeMode={'contain'}
              style={styles.iconback}
            />
          </Pressable>
      
        <Block flex alignCenter paddingHorizontal={30}>
          <Text
            center
            size={16}
            fontType="semibold"
            numberOfLines={2}
           >
            {title}
          </Text>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default Header;
