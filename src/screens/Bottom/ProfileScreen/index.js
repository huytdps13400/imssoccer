import React from 'react';
import {View} from 'react-native';
import Block from '../../../components/Block';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import HeaderProfile from './components/HeaderProfile';
import BodyProfile from './components/BodyProfile';
import styles from './styles';
import { getSize } from '../../../../utils/responsive';
const ProfileScreen = () => {
  return (
    <Block>
      <Header />
      <HeaderProfile />
      <Block  absolute marginRight={12} top={getSize.m(154)} paddingHorizontal={16}>
        <BodyProfile />
      </Block>
    </Block>
  );
};

export default ProfileScreen;
