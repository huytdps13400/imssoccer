import React from 'react';
import {FlatList} from 'react-native';
import Block from '../../../../../../../components/Block';
import ItemNewsDetails from '../../../../../../../components/Common/ItemNewsDetails';

const NewDetailsVertical = () => {
  const _renderItem = item => {
    return <ItemNewsDetails />;
  };
  return (
    <Block flex paddingTop={20} paddingHorizontal={12} paddingBottom={30}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default NewDetailsVertical;
