import React from 'react';
import {getSize, height} from '../../../../utils/responsive';
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
        paddingBottom={300}
        absolute
        marginTop={getSize.m(154)}
        marginRight={12}
        z-index={1}
        paddingHorizontal={16}>
        <BodyProfile />
      </Block>
    </Block>
  );
};

export default ProfileScreen;
