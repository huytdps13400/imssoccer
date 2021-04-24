import React from 'react';
import { ScrollView, Text } from 'react-native';
import { width } from '../../../../utils/responsive';
import Header from '../../../components/Header';
import Block from '../..//../components/Block';
// import ItemNotification from './components/ItemNotification';

const NotificationScreen = () => {
  return (
    <Block>
      <Header title={'Thông báo'}></Header>
      <Block alignCenter shadow backgroundColor={'#F7F8FA'} height={56} width={width} paddingVertical={15}>
        <Text center >Anh tài kêu chưa cần làm cái này:))))</Text>
      </Block>
      <ScrollView>
        {/* <ItemNotification></ItemNotification> */}
      </ScrollView>
   </Block>
  );
};

export default NotificationScreen;
