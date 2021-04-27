import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {theme} from '../../../../theme';
import {getSize, width} from '../../../../utils/responsive';
import {images} from '../../../assets';
import {routes} from '../../../navigation/routes';
import Block from '../../Block';
import Text from '../../Text';
import styles from './styles';

const ItemNewsDetails = props => {
  if (props.type === 'Horizontal') {
    return <ItemNewsDetailsHorizontal />;
  } else {
    return <ItemNewsDetailsVertical />;
  }
};
const ItemNewsDetailsHorizontal = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(routes.PROMOTION_DETAILS)}
      width={(width - 30) / 1.2}
      marginTop={18}
      marginLeft={6}>
      <Image
        source={images.bannernewsdetails}
        style={styles.bannernewsdetails}
      />

      <Text size={18} marginTop={15} numberOfLines={1} fontType="bold">
        Nhận định bóng đá Betis vs Bilbao 3h00 ngày 5/2 (Cúp Nhà vua TBN
        2020/21)
      </Text>
      <Text marginTop={15} numberOfLines={2} color={theme.colors.placeholder}>
        TTO - Những ngày qua, dư luận bàn luận nhiều về chuyện giao cho cấp nào
        lựa chọn SGK, quy trình lựa chọn, việc chọn SGK nào, tiến độ..v
      </Text>
    </Pressable>
  );
};
const ItemNewsDetailsVertical = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(routes.PROMOTION_DETAILS)}>
      <Block row marginBottom={10} space="between" marginTop={10}>
        <Block width={'25%'}>
          <Image
            source={images.bannernewsdetails}
            style={styles.bannernewsdetailsvertical}
          />
        </Block>
        <Block width={'75%'} paddingHorizontal={15}>
          <Text size={17} numberOfLines={2} fontType="semibold">
            Real đồng ý trao cơ hội cuối cùng cho Bale?
          </Text>
          <Block row alignCenter marginTop={15}>
            <Text color={theme.colors.blue}>
              Cập nhật {''}
              <Text color={theme.colors.blue} fontType="bold">
                .
              </Text>
            </Text>
            <Text marginLeft={5} color={theme.colors.blue}>
              1 ngày trước
            </Text>
          </Block>
        </Block>
      </Block>
      <Block height={getSize.s(1)} backgroundColor="smoke" />
    </Pressable>
  );
};
export default ItemNewsDetails;
