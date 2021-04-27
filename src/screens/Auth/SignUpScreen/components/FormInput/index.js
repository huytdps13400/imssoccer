import React from 'react';
import {theme} from '../../../../../../theme';
import {getSize} from '../../../../../../utils/responsive';
import Block from '../../../../../components/Block';
import Text from '../../../../../components/Text';
import TextInput from '../../../../../components/TextInput';
import styles from './styles';
const FormInput = ({title, status}) => {
  return (
    <Block marginTop={getSize.m(18)}>
      <Block row>
        <Text size={15} color={theme.colors.orange}>
          *
        </Text>
        <Text size={16} marginRight={getSize.m(10)}>
          {title}
        </Text>
      </Block>
      <TextInput containerStyle={styles.containerStyle} />
      <Text marginTop={getSize.m(8)} color={theme.colors.placeholder}>
        {status}
      </Text>
    </Block>
  );
};

export default FormInput;
