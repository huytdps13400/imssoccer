import React from 'react';
import {width} from '../../../../../../utils/responsive';
import {icon} from '../../../../../assets';
import Block from '../../../../../components/Block';
import Button from '../../../../../components/Button';
import Text from '../../../../../components/Text';
import ButtonManager from '../ButtonManager';
import styles from './styles';
const BodyProfile = () => {
  return (
    <Block
      height={'100%'}
      justifyCenter
      width={width - 32}
      marginTop={23}
      radius={13}
      paddingHorizontal={22}
      backgroundColor={'white'}>
      <Text size={16} marginTop={40} fontType={'bold'}>
        THÔNG TIN
      </Text>
      <Block marginTop={33}>
        <ButtonManager
          style={styles.buttonManager}
          image={icon.file_profile}
          title="Quản lý hồ sơ"
        />
        <ButtonManager
          style={styles.buttonManager}
          image={icon.notification_profile}
          title="Thông báo của tôi"
        />
        <ButtonManager
          style={styles.buttonManager}
          image={icon.rules_profile}
          title="Điều khoản sử dụng"
        />
      </Block>
      <Button title="Về trang chủ"></Button>
    </Block>
  );
};

export default BodyProfile;
