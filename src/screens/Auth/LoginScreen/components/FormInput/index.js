import React from 'react';
import TextInput from '../../../../../components/TextInput';
import Text from '../../../../../components/Text';
import Block from '../../../../../components/Block';
import {getSize, width} from '../../../../../../utils/responsive';
const FormInput = ({title, style, iconLeft, placeholder}) => {
  return (
    <Block style={style}>
      <Text marginBottom={12}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        iconLeft={iconLeft}
        containerStyle={{
          height: getSize.m(45),
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
        }}
      />
    </Block>
  );
};

export default FormInput;
