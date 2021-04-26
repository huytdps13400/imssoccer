import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {width} from '../../../../../../utils/responsive';
import Block from '../../../../../components/Block';
// import { CheckBox } from 'react-native-elements'
import {icon} from '../../../../../assets';
import styles from './styles';
import {Image} from 'react-native';
import Text from '../../../../../components/Text';

const ItemNotification = () => {
  return (
    <Block
      backgroundColor={'white'}
      paddingHorizontal={16}
      paddingTop={16}
    >
      <Block width={width -32} space={'between'}  row backgroundColor={'white'}>
        <Image
          source={icon.back}
          resizeMode={'contain'}
          style={styles.iconback}
        />
        <Text
          
          size={16}
          fontType={'Semibold'}
          numberOfLines={2}
          marginHorizontal={20}
        >
          Siêu thị thông báo tuyển dụng nhân viên bán hàng
        </Text>
        <Text size={14} fontType={'bold'}>12/03/2020</Text>
      </Block>
    </Block>
  );
};

export default ItemNotification;
