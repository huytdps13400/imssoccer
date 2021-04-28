import React from 'react';
import {Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getSize} from '../../../../../../utils/responsive';
import {icon} from '../../../../../assets';
import Block from '../../../../../components/Block';
import Text from '../../../../../components/Text';
import FormInput from '../FormInput';
import FormMobile from '../FormMobile';
import styles from './styles';
const FormSignUp = () => {
  const navigation = useNavigation();
  return (
    <Block
      flex
      radius={13}
      marginHorizontal={getSize.m(20)}
      marginBottom={getSize.m(20)}
      paddingHorizontal={getSize.m(20)}
      paddingTop={getSize.m(15)}
      backgroundColor="white">
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={icon.close} style={styles.iconclose} />
      </Pressable>
      <Block>
        <Text center size={getSize.s(20)} fontType="semibold">
          Thông Tin Đăng Ký
        </Text>
        <FormInput
          title={'Tên đăng nhập'}
          status={'Vui lòng nhập id Người chơi đăng ký'}
        />
        <FormInput
          title={'Mật khẩu'}
          status={'Mật khẩu phải từ 8 - 20 ký tự, bao gồm chữ và số'}
        />
        <FormInput
          title={'Email'}
          status={'Tài khoản email cần chính xác để nhận mật khẩu'}
        />
        <FormMobile />
      </Block>
    </Block>
  );
};

export default FormSignUp;
