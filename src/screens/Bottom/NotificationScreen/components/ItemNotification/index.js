import React, {useState} from 'react';
import {ScrollView, Pressable} from 'react-native';
import {width} from '../../../../../../utils/responsive';
import Block from '../../../../../components/Block';
// import { CheckBox } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native';
import {icon} from '../../../../../assets';
import styles from './styles';
import {Image} from 'react-native';
import Text from '../../../../../components/Text';
import { routes } from '../../../../../navigation/routes';

const ItemNotification = ({item_id, title, date }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() =>
      navigation.navigate(routes.DETAILS_NOTIFICATION, {
        item_id,
      })
    }>
    <Block paddingTop={16} paddingHorizontal={16}  space={'between'} row backgroundColor={'white'}>
      <Block row  width={'75%'}>
        <Image
          source={icon.checkbox}
          resizeMode={'contain'}
          style={styles.iconback}
        />
        <Text
          size={16}
          fontType={'medium'}
          numberOfLines={2}
          marginHorizontal={20}>
         {title}
        </Text>
      </Block>
      <Text width={'15%'} size={14} fontType={'bold'}>
      {date}
      </Text>
      </Block>
      </Pressable>
  );
};

export default ItemNotification;
