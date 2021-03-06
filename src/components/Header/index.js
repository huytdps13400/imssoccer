import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Platform, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../theme';
import {getSize} from '../../../utils/responsive';
import {icon} from '../../assets';
import {routes} from '../../navigation/routes';
import Block from '../Block';
import Text from '../Text';
import styles from './styles';

const COLOR =
  Platform.OS === 'ios' ? theme.colors.gradient_ios : theme.colors.gradient;

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={COLOR}>
      <Block
        paddingTop={Platform.OS === 'ios' ? top + 10 : getSize.m(top - 10)}
        paddingHorizontal={12}>
        <Block row alignCenter space="between">
          <Image source={icon.logoims} style={styles.logoims} />

          <Block row alignCenter>
            <Pressable
              onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}>
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
                <Text
                  marginHorizontal={getSize.m(12)}
                  fontType="semibold"
                  color="white">
                  Đăng Ký
                </Text>
              </Block>
            </Pressable>
            <Pressable onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}>
              <Block row alignCenter>
                <Block
                  alignCenter
                  justifyCenter
                  width={getSize.s(35)}
                  height={getSize.s(35)}
                  radius={getSize.s(35)}
                  backgroundColor="white">
                  <Image source={icon.logout} style={styles.iconlogout} />
                </Block>
                <Text
                  marginLeft={getSize.m(12)}
                  fontType="semibold"
                  color="white">
                  Đăng Nhập
                </Text>
              </Block>
            </Pressable>
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
    </LinearGradient>
  );
};

const HeaderCommon = ({title}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={COLOR}>
      <Block
        row
        alignCenter
        paddingTop={top}
        paddingHorizontal={12}
        paddingVertical={16}
        space="between">
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={icon.back} style={styles.iconback} />
        </Pressable>
        {title && (
          <Text flex center fontType="semibold">
            {title}
          </Text>
        )}
      </Block>
    </LinearGradient>
  );
};

export default Header;
