import React from 'react';
import Block from '../../../../../../components/Block';
import News from './components/News';
import NewsBottom from './components/NewsBottom';

const FllowScreen = () => {
  return (
    <Block flex backgroundColor="background">
      <News />
      <NewsBottom />
    </Block>
  );
};

export default FllowScreen;
