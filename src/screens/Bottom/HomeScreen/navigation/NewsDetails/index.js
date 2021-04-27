import React from 'react';
import {getSize} from '../../../../../../utils/responsive';
import Block from '../../../../../components/Block';
import Header from '../../../../../components/Header';
import NewsDetailsHorizontal from './components/NewsDetailsHorizontal';
import NewsDetailsVertical from './components/NewDetailsVertical';

const NewsDetails = () => {
  return (
    <Block flex backgroundColor="white">
      <Header title={'Tin tức & khuyến mãi'} />
      <NewsDetailsHorizontal />
      <Block height={getSize.s(8)} backgroundColor="smoke" />
      <NewsDetailsVertical />
    </Block>
  );
};

export default NewsDetails;
