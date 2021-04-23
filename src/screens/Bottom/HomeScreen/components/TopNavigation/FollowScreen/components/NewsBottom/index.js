import React from 'react';
import {Image} from 'react-native';
import {theme} from '../../../../../../../../../theme';
import {getSize} from '../../../../../../../../../utils/responsive';
import {images} from '../../../../../../../../assets';
import Block from '../../../../../../../../components/Block';
import Text from '../../../../../../../../components/Text';
import styles from './styles';
const NewsBottom = () => {
  return (
    <Block row paddingHorizontal={getSize.m(12)}>
      <Block flex height={'100%'}>
        <Image
          source={images.bannernewsbottomsoccer}
          style={styles.imgbanner}
          resizeMode="cover"
        />
        <Text
          fontType="semibold"
          color={theme.colors.white}
          style={styles.txtimg}>
          Nhận Định Bóng Đá
        </Text>
      </Block>
      <Block width={getSize.s(2)} height={'100%'} />
      <Block column flex>
        <Block flex>
          <Image
            source={images.bannernewspicter1}
            style={styles.imgbannerpicter1}
          />
          <Text
            fontType="semibold"
            color={theme.colors.white}
            style={styles.txtimg}>
            Soi Kèo Bóng Đá
          </Text>
        </Block>
        <Block width={'100%'} height={getSize.s(2)} />
        <Block backgroundColor={'red'} flex>
          <Image
            source={images.bannernewspicter2}
            style={styles.imgbannerpicter1}
          />
          <Text
            fontType="semibold"
            color={theme.colors.white}
            style={styles.txtimg}>
            Soi Cầu Xổ Số
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default NewsBottom;
