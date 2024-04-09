import React, {Dispatch, SetStateAction} from 'react';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import {Container, CustomInput} from './input.styles';
import {TouchableOpacity} from 'react-native';

type Props = {
  placeholder: string;
  icon?: string;
  size: number;
  onSubmit: () => void;
  inputRef: any;
};

export const Input = ({placeholder, icon, size, onSubmit, inputRef}: Props) => {
  const {colors} = useTheme();

  return (
    <Container>
      {icon && (
        <TouchableOpacity onPress={onSubmit}>
          <Icon name={icon} size={size} color={colors.text} />
        </TouchableOpacity>
      )}
      <CustomInput
        onChangeText={e => (inputRef.current = e)}
        placeholder={placeholder}
      />
    </Container>
  );
};
