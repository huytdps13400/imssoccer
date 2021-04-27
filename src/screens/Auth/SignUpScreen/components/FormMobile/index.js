import React, {useState} from 'react';
import {Image} from 'react-native';
import {theme} from '../../../../../../theme';
import {getSize} from '../../../../../../utils/responsive';
import {icon} from '../../../../../assets';
import Block from '../../../../../components/Block';
import Button from '../../../../../components/Button';
import CheckBox from '../../../../../components/CheckBox';
import Text from '../../../../../components/Text';
import styles from './styles';
const FormMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Block>
      <Block marginTop={getSize.m(18)}>
        <Block row>
          <Text size={15} color={theme.colors.orange}>
            *
          </Text>
          <Text size={16} marginRight={getSize.m(10)}>
            Số điện thoại
          </Text>
        </Block>
        <Block
          row
          alignCenter
          radius={5}
          borderColor={theme.colors.placeholder}
          borderWidth={1}
          height={getSize.v(45)}
          width={'70%'}
          marginTop={getSize.m(7)}
          paddingHorizontal={getSize.m(10)}>
          <Image source={icon.country} style={styles.iconcountry} />
          <Image source={icon.selectmobile} style={styles.iconselectmobile} />
          <Text>035 546 456</Text>
        </Block>
      </Block>
      <Block marginTop={getSize.m(18)}>
        <Block row>
          <CheckBox
            title={
              'Tôi 18 tuổi trở lên. Tôi đã đọc, chấp nhận và đồng ý toàn bộ chính sách, Điều khoản và Điều kiện luật lệ, '
            }
            value={toggle}
            textStyles={styles.styletxt}
            setValue={setToggle}
          />
        </Block>
        <Text size={16} marginTop={getSize.m(10)} color={theme.colors.red}>
          Bấm chọn, nếu đã đồng ý với chính sách thành viên
        </Text>
        <Button
          title={'Đăng ký ngay'}
          titleStyle={{color: theme.colors.black}}
          style={{marginTop: 10}}
        />
      </Block>
    </Block>
  );
};

export default FormMobile;
