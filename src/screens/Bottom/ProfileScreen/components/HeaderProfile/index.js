import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../../../../theme';
import Block from '../../../../../components/Block';
import Text from '../../../../../components/Text';
import {Image} from 'react-native';
import {icon} from '../../../../../assets';
import styles from './styles';
import {getSize} from '../../../../../../utils/responsive';
const HeaderProfile = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={theme.colors.gradient}
      style={{borderBottomLeftRadius: 41, borderBottomRightRadius: 41}}>
      <Block paddingHorizontal={33} row paddingBottom={getSize.m(80)}>
        <Block row>
          <Image source={icon.avatar} style={styles.imgAvatar}></Image>
          <Image source={icon.camera} style={styles.imgCamera}></Image>
        </Block>
        <Block marginLeft={14}>
          <Text size={16}>Đăng ký để xem ưu đãi</Text>
          <Text size={22} fontType={'Semibold'}>
            Đăng ký
          </Text>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default HeaderProfile;
