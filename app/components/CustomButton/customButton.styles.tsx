import React, {PropsWithChildren} from 'react';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type ContainerProps = PropsWithChildren<{
  isActive: boolean;
}>;

export const Title = ({children}: PropsWithChildren<{}>) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: ${fonts['2XL']};
    font-weight: 700;
    color: ${colors.text};
  `;

  return <Component>{children}</Component>;
};

export const Container = ({children, isActive}: ContainerProps) => {
  const {colors} = useTheme();

  const Component = styled.View`
    margin-left: 20px;
    padding: 10px 20px;
    border-radius: 30px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${isActive ? colors.primary : colors.inputBackground};
  `;

  return <Component>{children}</Component>;
};
