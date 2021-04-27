import React from 'react';
import {FlatList, Image} from 'react-native';
import {icon} from '../../../../../../../assets';
import Block from '../../../../../../../components/Block';
import ItemNewsDetails from '../../../../../../../components/Common/ItemNewsDetails';
import Text from '../../../../../../../components/Text';
import styles from './styles';
const NewsDetailsHorizontal = () => {
  const _renderItem = item => {
    return <ItemNewsDetails type="Horizontal" />;
  };
  return (
    <Block marginTop={20} paddingHorizontal={12} marginBottom={20}>
      <Block row space="between">
        <Block row alignCenter>
          <Image source={icon.icondetailsnews} style={styles.icondetail} />
          <Text size={17} fontType="bold">
            Tin tức mới nhất
          </Text>
        </Block>
      </Block>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        horizontal
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </Block>
  );
};

export default NewsDetailsHorizontal;
