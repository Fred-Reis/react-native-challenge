import React, {PropsWithChildren, forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type ContainerProps = PropsWithChildren<{}>;

interface Props extends React.RefAttributes<TextInput>, TextInputProps {}

export const CustomInput = ({...rest}: Props) => {
  const {colors, fonts} = useTheme();

  const Component = styled(TextInput).attrs({
    placeholderTextColor: colors.inputPlaceholderText,
  })`
    flex: 1;
    margin: 0 10px;

    font-size: ${fonts['XL']};
    color: ${colors.text};
  `;

  return <Component {...rest} />;
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
