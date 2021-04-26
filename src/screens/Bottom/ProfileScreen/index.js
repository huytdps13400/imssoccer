import React from 'react';
import {getSize} from '../../../../utils/responsive';
import Block from '../../../components/Block';
import Header from '../../../components/Header';
import BodyProfile from './components/BodyProfile';
import HeaderProfile from './components/HeaderProfile';
const ProfileScreen = () => {
  return (
    <Block>
      <Header />
      <HeaderProfile />
      <Block
        absolute
        marginRight={12}
        top={getSize.m(154)}
        paddingHorizontal={16}>
        <BodyProfile />
      </Block>
    </Block>
  );
};

export default ProfileScreen;
