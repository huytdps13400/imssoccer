import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import Actions from '../../redux/actions';
import React, {useEffect} from 'react';
import {Image, Platform, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {theme} from '../../../theme';
import {getSize, height, width} from '../../../utils/responsive';
import {icon} from '../../assets';
import {routes} from '../../navigation/routes';
import TopTab from '../../navigation/TopTabNavigation';
import Block from '../Block';
import Text from '../Text';
import styles from './styles';

const COLOR =
  Platform.OS === 'ios' ? theme.colors.gradient_ios : theme.colors.gradient;

const Tab = createMaterialTopTabNavigator();

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
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenApp.token);
  const newsGroup = useSelector(state => state.newsGroup.data);
  console.log('news', newsGroup);
  useEffect(() => {
    dispatch({
      type: Actions.GET_TOKEN,
      body: {
        username: 'ims',
        password: 'bxsMSKNrDIlO3KRsszQe0tRcHVyo2Ww6',
      },
    });
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch({
        type: Actions.GET_NEWS_GROUP,
      });
      dispatch({
        type: Actions.GET_CONFIG_APP,
      });
    }
  }, [dispatch, token]);
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
      <Block width={width} height={height}>
        {newsGroup?.length > 0 ? (
          <Tab.Screen tabBar={props => <TopTab {...props} />}></Tab.Screen>
        ) : null}
        {/* <TopTab /> */}
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
