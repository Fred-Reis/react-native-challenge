import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Title} from './customButton.styles';

type ButtomProps = {
  title: string;
  isActive: boolean;
  onSubmit: () => void;
};

export const CustomButton = ({title, onSubmit, isActive}: ButtomProps) => {
  return (
    <TouchableOpacity onPress={onSubmit}>
      <Container isActive={isActive}>
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};
