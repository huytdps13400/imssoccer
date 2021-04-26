import React from 'react';
import {Image, Pressable} from 'react-native';
import {theme} from '../../../../../../../../../theme';
import {getSize} from '../../../../../../../../../utils/responsive';
import {images} from '../../../../../../../../assets';
import Block from '../../../../../../../../components/Block';
import Text from '../../../../../../../../components/Text';
import {navigate} from '../../../../../../../../navigation/RootNavigation';
import {routes} from '../../../../../../../../navigation/routes';
import styles from './styles';
const news = () => {
  return (
    <Block paddingHorizontal={getSize.m(12)} marginBottom={getSize.m(10)}>
      <Image source={images.bannernew} style={styles.bannernews} />
      <Text numberOfLines={2} size={getSize.s(20)} fontType="bold">
        Lewandowski và sự “khiêu khích” đúng thời điểm của Goretzka
      </Text>
      <Block row marginTop={getSize.m(10)} space="between">
        <Block row alignCenter>
          <Text center size={12}>
            Cập nhật {''}
            <Text color={theme.colors.placeholder}>.</Text>
          </Text>
          <Text size={12} marginLeft={5} color={theme.colors.placeholder}>
            4 ngày trước
          </Text>
        </Block>
        <Pressable onPress={() => navigate(routes.NEWS_DETAILS)}>
          <Text size={12}>xem tất cả</Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default news;
