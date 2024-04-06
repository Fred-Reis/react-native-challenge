import React, {PropsWithChildren} from 'react';
import {TextInputProps} from 'react-native';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ContainerProps = PropsWithChildren<{}>;

export const CustomInput = ({...style}: TextInputProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.TextInput.attrs({
    placeholderTextColor: colors.inputPlaceholderText,
  })`
    flex: 1;
    margin: 0 10px;

    font-size: ${fonts['XL']};
    color: ${colors.text};
  `;

  return <Component {...style} />;
};

export const Container = ({children}: ContainerProps) => {
  const {colors} = useTheme();

  const Component = styled.View`
    flex: 1;
    height: 60px;
    padding: 0 25px;
    border-radius: 25px;

    flex-direction: row;
    align-items: center;

    background-color: ${colors.inputBackground};
  `;

  return <Component>{children}</Component>;
};
