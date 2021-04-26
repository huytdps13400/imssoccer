import React from 'react';
import {width} from '../../../../../../utils/responsive';
import Block from '../../../../../components/Block';

const ItemNotification = () => {
  return (
    <Block
      row
      backgroundColor={'red'}
      width={width}
      paddingTop={16}
      paddingBottom={16}
      paddingRight={16}></Block>
  );
};

export default ItemNotification;
