import React from 'react';
import Block from '../../../../../../components/Block';
import News from './components/News';
import NewsBottom from './components/NewsBottom';

const FllowScreen = ({group_id}) => {
  return (
    <Block flex backgroundColor="background">
      <News group_id={group_id} />
      <NewsBottom group_id={group_id} />
    </Block>
  );
};

export default FllowScreen;
