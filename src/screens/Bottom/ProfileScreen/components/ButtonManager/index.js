import React from 'react';
import {Image, Pressable} from 'react-native';
import {getSize} from '../../../../../../utils/responsive';
import {icon} from '../../../../../assets';
import Block from '../../../../../components/Block';
import Text from '../../../../../components/Text';
import styles from './styles';
const ButtonManager = ({image, title}) => {
  return (
    <Pressable>
      <Block
        marginTop={10}
        width={'100%'}
        style={styles.container}
        row
        height={getSize.s(35)}>
        <Block row>
          <Image source={image}></Image>
          <Text marginLeft={10} size={17}>
            {title}
          </Text>
        </Block>

        <Image style={styles.iconNext} source={icon.next}></Image>
      </Block>
    </Pressable>
  );
};

export default ButtonManager;
