import React from 'react';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import {Container, CustomInput} from './input.styles';
import {TouchableOpacity} from 'react-native';

type Props = {
  placeholder: string;
  icon?: string;
  size: number;
  onPress: () => void;
};

export const Input = ({placeholder, icon, size, onPress}: Props) => {
  const {colors} = useTheme();
  return (
    <Container>
      {icon && (
        <TouchableOpacity onPress={onPress}>
          <Icon name={icon} size={size} color={colors.text} />
        </TouchableOpacity>
      )}
      <CustomInput placeholder={placeholder} />
    </Container>
  );
};
