import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getSize, width} from '../../../../utils/responsive';
import {icon} from '../../../assets';
import Block from '../../../components/Block';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import FormInput from './components/FormInput';
import CheckBox from '../../../components/CheckBox';
import styles from './styles';
import {theme} from '../../../../theme';
const LoginScreen = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Block flex backgroundColor={'white'}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={theme.colors.gradient}
        style={{height: getSize.v(275)}}
      />
      <Block
        absolute
        width={width - 32}
        shadow
        backgroundColor={'white'}
        marginVertical={getSize.m(60)}
        marginHorizontal={getSize.m(16)}
        radius={17}>
        <Block
          paddingVertical={getSize.m(50)}
          alignCenter
          paddingHorizontal={getSize.m(26)}>
          <Image style={styles.imgLogo} source={icon.logoims} />
          <Block marginTop={getSize.m(35)}>
            <Text center fontType={'bold'} size={20}>
              Xin chào
            </Text>
            <Text
              center
              marginTop={getSize.m(15)}
              fontType={'regular'}
              size={getSize.s(14)}>
              Vui lòng đăng nhập để tiếp tục
            </Text>
            <FormInput
              placeholder={'Tên đăng nhập'}
              iconLeft={icon.user_login}
              style={{marginTop: getSize.m(31)}}
              title={'Tên đăng nhập'}
            />
            <FormInput
              placeholder={'Xin vui lòng nhập mật khẩu'}
              iconLeft={icon.pass_login}
              style={{marginTop: getSize.m(14)}}
              title={'Mật khẩu'}
            />
            <CheckBox
              textStyles={{size: 15, fontWeight: 'regular'}}
              containerStyles={{marginTop: 18}}
              title={'Ghi nhớ đăng nhập'}
              value={toggle}
              setValue={setToggle}
            />
            <Button title="Đăng nhập"></Button>
            <Text center style={styles.txtForgot} marginTop={getSize.m(17)}>
              Quên mật khẩu
            </Text>
            <Text center size={getSize.s(12)} marginTop={getSize.m(24)}>
              Giúp bạn tìm được công việc nhanh, dễ dàng nhất
            </Text>
            <Pressable>
              <Text
                center
                marginTop={getSize.m(19)}
                size={getSize.s(15)}
                fontType={'semibold'}>
                ĐĂNG KÝ TÀI KHOẢN
              </Text>
            </Pressable>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default LoginScreen;
