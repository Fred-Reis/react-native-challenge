import React, {PropsWithChildren} from 'react';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type TextProps = PropsWithChildren<{}>;

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0 40px;
  gap: 4px;
`;

export const RedText = ({children}: TextProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    letter-spacing: 0.5px;
    font-size: ${fonts['2XL']};
    font-weight: 700;
    color: ${colors.primary};
  `;

  return <Component>{children}</Component>;
};

export const DinamicText = ({children}: TextProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    letter-spacing: 0.5px;
    font-size: ${fonts['2XL']};
    font-weight: 700;
    color: ${colors.text};
  `;

  return <Component>{children}</Component>;
};
