import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {width} from '../../../../utils/responsive';
import Header from '../../../components/Header';
import Block from '../..//../components/Block';
import ItemNotification from './components/ItemNotification';

const NotificationScreen = () => {
  const _renderItem = ({item}) => (
    <ItemNotification
      title={'Siêu thị thông báo tuyển dụng nhân viên bán hàng'}
      date={'12/03/2020'}
    />
  );
  return (
    <Block>
      <Header title={'Thông báo'}></Header>
      <Block
        alignCenter
        shadow
        backgroundColor={'#F7F8FA'}
        height={56}
        width={width}
        paddingVertical={15}>
        <Text center>Anh Tài kêu chưa cần làm cái này:))))</Text>
      </Block>
      <ScrollView>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </Block>
  );
};

export default NotificationScreen;
